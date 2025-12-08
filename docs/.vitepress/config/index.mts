import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'element-ai',

  description: '企业级 AI 交互组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.svg', width: 30, height: 30 },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/1365436742/element-ai' },
    ],
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo-black.svg' }],
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [{ text: '首页', link: '/zh' }],
        sidebar: [
          {
            text: '示例',
            items: [
              { text: '快速开始', link: '/zh/markdown-examples' },
              { text: '组件预览', link: '/zh/api-examples' },
            ],
          },
        ],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [{ text: 'Home', link: '/en/' }],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/en/markdown-examples' },
              { text: 'Runtime API Examples', link: '/en/api-examples' },
            ],
          },
        ],
      },
    },
  },
})
