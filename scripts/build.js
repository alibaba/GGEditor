#!/usr/bin/env node

/* eslint-disable */
const signale = require('signale');
const rimraf = require('rimraf');
const rollup = require('rollup');
const resolve = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const typescript = require('rollup-plugin-typescript2');
const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');
const { exec } = require('child_process');
const { version, dependencies = {}, peerDependencies = {} } = require('../package.json');
/* eslint-enable */

console.log(version);
console.log(JSON.stringify(dependencies));

const makeExternalPredicate = externalArray => {
  if (!externalArray.length) {
    return () => false;
  }

  const pattern = new RegExp(`^(${externalArray.join('|')})($|/)`);

  return id => pattern.test(id);
};

async function build() {
  // Clean
  rimraf.sync('dist');
  rimraf.sync('lib');
  rimraf.sync('es');

  signale.success('Clean success');

  // Build umd
  try {
    const umdBundle = await rollup.rollup({
      input: 'src/index.tsx',
      plugins: [
        resolve({
          browser: true,
        }),
        replace({
          'process.env.GG_EDITOR_VERSION': JSON.stringify(version),
        }),
        commonjs(),
        typescript({
          tsconfigOverride: {
            compilerOptions: {
              declaration: false,
            },
          },
        }),
        babel({
          exclude: 'node_modules/**',
          extensions: ['.ts', '.tsx'],
          plugins: [['@babel/plugin-transform-runtime', { useESModules: false }]],
          runtimeHelpers: true,
        }),
        terser(),
        json(),
      ],
      external: makeExternalPredicate([...Object.keys(dependencies), ...Object.keys(peerDependencies)]),
    });

    console.log('umd done');

    await umdBundle.write({
      name: 'GGEditor',
      file: 'dist/index.js',
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
      exports: 'named',
    });

    signale.success('Build umd success');
  } catch (error) {
    signale.error(error);
    console.log(error);
  }

  // Build cjs
  try {
    console.log('do cjs');
    const cjsBundle = await rollup.rollup({
      input: 'src/index.tsx',
      plugins: [
        resolve(),
        replace({
          'process.env.GG_EDITOR_VERSION': JSON.stringify(version),
        }),
        commonjs(),
        typescript(),
        babel({
          exclude: 'node_modules/**',
          extensions: ['.ts', '.tsx'],
          plugins: [['@babel/plugin-transform-runtime', { useESModules: false }]],
          runtimeHelpers: true,
        }),
      ],
      external: makeExternalPredicate([...Object.keys(dependencies), ...Object.keys(peerDependencies)]),
    });

    await cjsBundle.write({
      file: 'lib/index.js',
      format: 'cjs',
      exports: 'named',
    });
    signale.success('Build cjs success');
  } catch (error) {
    signale.error(error);
  }

  // Build esm
  try {
    const esmBundle = await rollup.rollup({
      input: 'src/index.tsx',
      plugins: [
        resolve(),
        replace({
          'process.env.GG_EDITOR_VERSION': JSON.stringify(version),
        }),
        commonjs(),
        typescript({
          tsconfigOverride: {
            compilerOptions: {
              declaration: false,
            },
          },
        }),
        babel({
          exclude: 'node_modules/**',
          extensions: ['.ts', '.tsx'],
          plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
          runtimeHelpers: true,
        }),
      ],
      external: makeExternalPredicate([...Object.keys(dependencies), ...Object.keys(peerDependencies)]),
    });

    await esmBundle.write({
      file: 'es/index.js',
      format: 'esm',
    });

    signale.success('Build esm success');
  } catch (error) {
    signale.error(error);
  }

  // Replace absolute paths to relative paths
  exec(`tscpaths -p ./tsconfig.cjs.json -s ./lib`, error => {
    if (error) {
      signale.error(error);
    }
  });
}

build();
