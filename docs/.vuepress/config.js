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
  base: '/nitro-workshop/',
  themeConfig: {
    logo: '/nitro.png',
    sidebar: [   
      '/intro',
      '/env',
      '/step1',
      '/step2',
      '/step3',
      '/step4',
      // '/step5',
      '/conclusion'
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Workshop', link: '/intro' },
      { text: 'Nitro website', link: 'https://nitr.ooo' },
      { text: 'GitHub', link: 'https://github.com/nitro-stack/nitro-workshop' },
    ]
  },
  plugins: [
    // 'social-share',
    ['vuepress-plugin-code-copy', {
      color: '#fff',
      backgroundTransition: false
    }],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/google-analytics', {
      'ga': process.env.GA
    }],
    ['@limdongjin/vuepress-plugin-simple-seo', {
      default_image: '/nitro.png',
      root_url: 'https://nitro-stack.github.io/nitro-workshop',
      default_site_name: 'Nitro Workshop',
      default_twitter_creator: '@sinedied',
      default_twitter_site: '@sinedied',
      default_og_type: 'website'
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
  ga: process.env.ga
};
