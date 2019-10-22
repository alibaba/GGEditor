#!/usr/bin/env node

/* eslint-disable */
const rimraf = require('rimraf');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript2');
/* eslint-enable */

async function build() {
  // Clean
  rimraf.sync('dist');
  rimraf.sync('lib');
  rimraf.sync('es');
  rimraf.sync('types');

  // Build umd
  const umdBundle = await rollup.rollup({
    input: 'src/index.tsx',
    plugins: [
      resolve(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
    ],
    external: ['react'],
  });

  await umdBundle.write({
    name: 'GGEditor',
    file: 'dist/index.js',
    format: 'umd',
  });

  // Build cjs
  const cjsBundle = await rollup.rollup({
    input: 'src/index.tsx',
    plugins: [
      resolve(),
      typescript({
        useTsconfigDeclarationDir: true,
      }),
    ],
    external: ['react'],
  });

  await cjsBundle.write({
    file: 'lib/index.js',
    format: 'cjs',
  });

  // Build esm
  const esmBundle = await rollup.rollup({
    input: 'src/index.tsx',
    plugins: [
      resolve(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
    ],
    external: ['react'],
  });

  await esmBundle.write({
    file: 'es/index.js',
    format: 'esm',
  });
}

build();
