import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/dist/',
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  bundler: viteBundler(),
  theme: defaultTheme({
    // 默认主题配置
    logo: '/images/logo.png',
    logoAlt: 'logo',
    home: '/', // 用途 1.首页 2.logo链接 3.404返回页面
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '新闻',
        link: '/News',
      },
    ],
    sidebar: [
      {
        text: '学习文档',
        prefix: '/docs/',
        children: [
          // SidebarItem
          {
            text: 'lodash',
            link: 'https://www.lodashjs.com/'
          },
          {
            text: 'vite',
            link: 'https://cn.vitejs.dev/guide/'
          },
        ],
      },
      {
        text: '组件库',
        prefix: '/ui/',
        link: '/ui/index.md',
        children: [
          // SidebarItem
          {
            text: 'pc',
            link: 'pc/pc.md'
          },
          {
            text: 'mobile',
            link: 'mobile/mobile.md'
          },
        ],
      }
    ],
  }),
})