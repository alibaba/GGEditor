#!/usr/bin/env node

/* eslint-disable */
const fs = require('fs');
const inquirer = require('inquirer');
const signale = require('signale');
const rimraf = require('rimraf');
const rollup = require('rollup');
const postcss = require('rollup-plugin-postcss');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const commonjs = require('rollup-plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');
const serve = require('rollup-plugin-serve');
const livereload = require('rollup-plugin-livereload');
const { version } = require('../package.json');
/* eslint-enable */

function start(name) {
  const contentBase = `examples`;

  // Clean
  rimraf.sync(`${contentBase}/dist`);

  signale.success('Clean success');

  // Watch
  const watcher = rollup.watch({
    input: [`${contentBase}/${name}/index.tsx`],
    output: {
      file: `${contentBase}/dist/bundle.js`,
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        antd: 'antd',
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
      replace({
        'process.env.GG_EDITOR_VERSION': JSON.stringify(version),
      }),
      commonjs(),
      typescript({
        tsconfig: 'examples/tsconfig.json',
      }),
      babel(),
      json(),
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

const choices = fs.readdirSync('examples').filter(name => {
  return !['mock', 'dist', 'index.html', 'index.d.ts', 'tsconfig.json', '.DS_Store'].includes(name);
});

inquirer
  .prompt([
    {
      type: 'list',
      name: 'name',
      message: 'Which example do you want to run?',
      choices,
    },
  ])
  .then(({ name }) => {
    start(name);
  });
