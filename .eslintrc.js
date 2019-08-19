module.exports = {
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // 固定缩进空格
    '@typescript-eslint/indent': 0,

    // 支持类型推断
    '@typescript-eslint/explicit-function-return-type': 0,

    // 默认公有类型
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],

    // 允许接口为空
    '@typescript-eslint/no-empty-interface': 0,

    // 支持对象断言
    '@typescript-eslint/no-object-literal-type-assertion': 0,

    // React 相关
    'react/display-name': 0,
    'react/prop-types': 0,
  },
};
