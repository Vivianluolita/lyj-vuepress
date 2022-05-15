module.exports = {
  title: 'lyj-vuepress',
  description: 'a blog',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    //增加manifest.json
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  base: '/', // 这是部署到github相关的配置
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
