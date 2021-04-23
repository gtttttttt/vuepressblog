module.exports = {
    title: 'GT的博客',
    description: '我的个人博客',
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav:[ // 导航栏配置
          {text: '前端基础', link: '/accumulate/' },
          {text: '算法题库', link: '/algorithm/'},
          {text: '百度', link: 'https://baidu.com'}      
        ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
        serviceWorker: true // 是否开启 PWA
    },
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'manifest', href: '/photo.jpg' }],
        ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
    ],
	base: '/myBlog/', 
  }