import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-hook-dom',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  dynamicImport: {},
  publicPath: process.env.NODE_ENV === 'production' ? '/react-hook-dom/' : '/',
  base: process.env.NODE_ENV === 'production' ? '/react-hook-dom/' : '/',
  navs: [
    {
      title: 'Hooks',
      path: '/hooks',
    },
  ],
  menus: {
    '/hooks': [
      {
        title: 'Hooks',
        children: ['useComputeOverflow', 'useElementVisible', 'useLoading'],
      },
    ],
  },
});
