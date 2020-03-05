module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
      },
    ],
    '@babel/preset-react',
  ];

  const plugins = ['lodash'];

  return {
    presets,
    plugins,
  };
};
