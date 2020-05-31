#!/usr/bin/env node

/* eslint-disable */
const signale = require('signale');
const { exec } = require('child_process');

// Replace absolute paths to relative paths
exec(`tscpaths -p ./tsconfig.cjs.json -s ./lib`, error => {
  if (error) {
    signale.error(error);
  }
});
