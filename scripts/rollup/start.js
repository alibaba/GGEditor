#!/usr/bin/env node

/* eslint-disable */
const signale = require('signale');
const rimraf = require('rimraf');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const typescript = require('rollup-plugin-typescript2');
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
    output: [
      {
        file: `${contentBase}/dist/bundle.js`,
        format: 'umd',
      },
    ],
    plugins: [
      resolve(),
      babel(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
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

start('mind');
