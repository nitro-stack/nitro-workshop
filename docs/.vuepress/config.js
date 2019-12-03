require('dotenv').config();
// const pages = require('globby').sync(['*.md', '!readme*'], { cwd: 'docs' });

module.exports = {
  title: 'Nitro workshop',
  head: [
    ['link', { rel: 'icon', href: `/nitro.png` }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#0078d7' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#0078d7' }]
  ],
  themeConfig: {
    logo: '/nitro.png',
    sidebar: [   
      '/intro',
      '/env',
      '/step1',
      '/step2',
      '/step3',
      '/step4',
      '/conclusion'
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Workshop', link: '/intro' },
      { text: 'Nitro website', link: 'https://nitr.ooo' },
    ]
  },
  plugins: [
    // 'social-share',
    '@vuepress/active-header-links',
    ['vuepress-plugin-code-copy', {
      color: '#fff',
      backgroundTransition: false
    }],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/google-analytics', {
      'ga': process.env.ga
    }],
    ['@limdongjin/vuepress-plugin-simple-seo', {
      default_image: '/nitro.jpg',
      root_url: 'https://TODO.com',
      default_site_name: 'Nitro Workshop - Learn how to make Node.js serverless REST APIs with NestJS and Azure'
    }],
    ['@vuepress/medium-zoom', {
      options: {
        background: '#000'
      }
    }]
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-imsize'));
    },
  },
};
