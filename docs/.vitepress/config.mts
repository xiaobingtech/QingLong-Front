import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "青龙面板",
  description: "掌上青龙面板管家",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '常见问题', link: '/faq' }
    ],

    sidebar: [
      {
        text: '文章列表',
        items: [
          { text: '常见问题', link: '/faq' },
          { text: '隐私协议', link: '/privacy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaobingtech/QingLong-Front' }
    ]
  }
})
