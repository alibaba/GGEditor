import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  logo: 'https://img.alicdn.com/tfs/TB1FFA1CFP7gK0jSZFjXXc5aXXa-214-200.png',
  title: 'GGEditor',
  favicon: 'https://img.alicdn.com/tfs/TB1Des3CNn1gK0jSZKPXXXvUXXa-16-16.ico',
  navs: {
    'en-US': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/alibaba/GGEditor',
      },
      {
        title: 'Changelog',
        path: 'https://github.com/alibaba/GGEditor/blob/master/CHANGELOG.md',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/alibaba/GGEditor',
      },
      {
        title: '更新日志',
        path: 'https://github.com/alibaba/GGEditor/blob/master/CHANGELOG.md',
      },
    ],
  },
  exportStatic: {},
  scripts: [
    'https://g.alicdn.com/code/lib/react/16.8.6/umd/react.production.min.js',
    'https://g.alicdn.com/code/lib/react-dom/16.8.6/umd/react-dom.production.min.js',
    'https://g.alicdn.com/code/lib/moment.js/2.24.0/moment.min.js',
    'https://g.alicdn.com/code/lib/antd/3.23.6/antd.min.js',
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    antd: 'antd',
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
});
