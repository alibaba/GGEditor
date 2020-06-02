export default {
  entry: './src/index.tsx',
  esm: 'babel',
  cjs: 'babel',
  replace: {
    'process.env.GG_EDITOR_VERSION': JSON.stringify(require('./package.json').version),
  },
};
