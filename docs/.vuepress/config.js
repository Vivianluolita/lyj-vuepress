module.exports = {
  title: 'lyj-vuepress',
  description: 'a blog',
  dest: './dist',//默认在.vuepress下
  head: [
    ['link', { rel: 'icon', href: '/image/logo.jpeg' }],
    //增加manifest.json
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    //增加manifest.json
    ['link', { rel: 'stylesheet', href: '/css/style.css' }],
    ['script', { charset: 'utf-8', href: '/js/main.js' }],
  ],
  base: '/dist/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: require("./nav.js"),
    sidebar: require("./sidebar.js"), // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
  plugins: [
    [
      '@vuepress/back-to-top'
    ],
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ]
};
