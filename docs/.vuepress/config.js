require('dotenv').config();
// const pages = require('globby').sync(['*.md', '!readme*'], { cwd: 'docs' });

module.exports = {
  title: 'Nitro Workshop',
  seo: {
    description: 'Learn how to make Node.js serverless REST APIs with NestJS and Azure',
    author: {
      name: 'Yohan Lasorsa',
      twitter: '@sinedied'
    },
    url: 'https://nitro-stack.github.io/nitro-workshop',
    image: '/nitro.png',
  },
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
      '/step5',
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
    ['social-share', {
      noGlobalSocialShare: true,
      networks: ['twitter', 'facebook', 'reddit', 'linkedin', 'whatsapp'],
      twitterUser: 'sinedied',
      fallbackImage: 'https://nitro-stack.github.io/nitro-workshop/nitro.png',
      autoQuote: true,
      extendsNetworks: {
        linkedin: {
          sharer: 'https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description',
          type: 'popup',
          color: '#1786b1',
          icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M910.336 0H113.664A114.005333 114.005333 0 0 0 0 113.664v796.672A114.005333 114.005333 0 0 0 113.664 1024h796.672A114.005333 114.005333 0 0 0 1024 910.336V113.664A114.005333 114.005333 0 0 0 910.336 0zM352.256 796.330667H207.189333V375.466667h145.066667z m-72.021333-477.866667a77.824 77.824 0 0 1-81.237334-74.069333A77.824 77.824 0 0 1 280.234667 170.666667a77.824 77.824 0 0 1 81.237333 73.728 77.824 77.824 0 0 1-81.237333 73.386666z m582.314666 477.866667H716.8v-227.669334c0-46.762667-18.432-93.525333-73.045333-93.525333a84.992 84.992 0 0 0-81.237334 94.549333v226.304h-140.629333V375.466667h141.653333v60.757333a155.989333 155.989333 0 0 1 136.533334-71.338667c60.416 0 163.498667 30.378667 163.498666 194.901334z" /></svg>',      
        }
      }
    }],
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
    ['@vuepress/medium-zoom', {
      options: {
        background: '#000'
      }
    }],
    ['seo', {
      description: $page => $page.frontmatter.description || ($site.seo && $site.seo.description),
      author: (_, $site) => $site.seo && $site.seo.author,
      url: (_, $site, path) => ($site.seo && $site.seo.url || '') + path,
      image: ($page, $site) => $page.frontmatter.image && (($site.seo && $site.seo.url || '') + $page.frontmatter.image) ||
        ($site.seo && $site.seo.image && ($site.seo.url || '') + $site.seo.image),
    }]
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-imsize'));
    },
  }
};
