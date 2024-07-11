import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/vue-press-docs/',
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  bundler: viteBundler(),
  theme: defaultTheme({
    // 默认主题配置
    logo: '/images/logo.png',
    logoAlt: 'logo',
    repo: 'https://github.com/isliwei/vue-press-docs', // git仓库
    home: '/', // 用途 -> 1.首页 2.logo链接 3.404返回页面
    backToHome: '首页', // 404页面返回首页按钮文案
    editLink: false, // 是否展示编辑此页
    lastUpdated: false, // 不展示 最近更新时间戳
    contributors: false, // 不展示贡献者
    navbar: [
      // {
      //   text: '首页',
      //   link: '/',
      // }
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
    ]
  }),
})