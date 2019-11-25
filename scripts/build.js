#!/usr/bin/env node

/* eslint-disable */
const signale = require('signale');
const rimraf = require('rimraf');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const commonjs = require('rollup-plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const { exec } = require('child_process');
const { version } = require('../package.json');
/* eslint-enable */

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
      ],
      external: ['react', 'antd'],
    });

    await umdBundle.write({
      name: 'GGEditor',
      file: 'dist/index.js',
      format: 'umd',
      globals: {
        react: 'React',
      },
      exports: 'named',
    });

    signale.success('Build umd success');
  } catch (error) {
    signale.error(error);
  }

  // Build cjs
  try {
    const cjsBundle = await rollup.rollup({
      input: 'src/index.tsx',
      plugins: [
        resolve(),
        replace({
          'process.env.GG_EDITOR_VERSION': JSON.stringify(version),
        }),
        commonjs(),
        typescript(),
      ],
      external: ['react', 'antd', '@antv/g6', 'lodash'],
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
      ],
      external: ['react', 'antd', '@antv/g6', 'lodash'],
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
