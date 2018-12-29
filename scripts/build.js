#!/usr/bin/env node

const { exec } = require('child_process');
const { version } = require('../package.json');

exec(`cross-env GG_EDITOR_VERSION=${version} npm run build:es`, (error) => {
  console.log(error || 'Build es success！');
});

exec(`cross-env GG_EDITOR_VERSION=${version} npm run build:cjs`, (error) => {
  console.log(error || 'Build cjs success！');
});

exec(`cross-env GG_EDITOR_VERSION=${version} npm run build:umd`, (error) => {
  console.log(error || 'Build umd success！');
});

exec(`cross-env GG_EDITOR_VERSION=${version} npm run build:demo`, (error) => {
  console.log(error || 'Build demo success！');
});
