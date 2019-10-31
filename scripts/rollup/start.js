#!/usr/bin/env node

/* eslint-disable */
const signale = require('signale');
const rimraf = require('rimraf');
const rollup = require('rollup');
const postcss = require('rollup-plugin-postcss');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const babel = require('rollup-plugin-babel');
const serve = require('rollup-plugin-serve');
const livereload = require('rollup-plugin-livereload');
/* eslint-enable */

function start(example) {
  const contentBase = `examples/${example}`;

  // Clean
  rimraf.sync(`${contentBase}/dist`);

  signale.success('Clean success');

  // Watch
  const watcher = rollup.watch({
    input: [`${contentBase}/src/index.tsx`],
    output: {
      file: `${contentBase}/dist/bundle.js`,
      format: 'umd',
      globals: {
        react: 'React',
      },
    },
    plugins: [
      postcss({
        modules: {
          camelCase: true,
          generateScopedName: '[local]--[hash:base64:5]',
        },
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
      babel(),
      serve({
        open: true,
        contentBase,
        port: 8080,
      }),
      livereload(),
    ],
    external: ['react', 'react-dom', 'antd'],
  });

  watcher.on('event', event => {
    const { code, error } = event;

    switch (code) {
      case 'START':
        signale.info('Rebuild since file changed');
        break;

      case 'ERROR':
        signale.error(error);

      default:
        break;
    }
  });
}

start('flow');
