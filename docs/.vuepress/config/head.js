const baidutj = require("../common/baidutj.js");

// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'shortcut icon', href: '/img/logo.png' }], //favicons，资源放在public文件夹

  ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }], // 阿里在线矢量库
  ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],  // 解决 Chrome 网站统计不准确问题

  ['noscript', {}, '<meta http-equiv="refresh" content="0; url=https://www.youngkbt.cn/noscript/"><style>.theme-vdoing-content { display:none }'],  // 私密文章模块需要

  [
    'meta',
    {
      name: 'keywords',
      content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
    },
  ],
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色

  // 下面四个 script 是 demo-block 插件用到，但是因为导航栏兼容问题，不再使用
  // ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
  // ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
  // ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
  // ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  // Twikoo 评论系统
  ['script', { src: 'https://cdn.jsdelivr.net/npm/twikoo@1.4.18/dist/twikoo.all.min.js' }],

  // 百度统计 js
  ['script', {}, baidutj],

  /*  [
     'script',
     {
       'data-ad-client': 'ca-pub-7828333725993554',
       async: 'async',
       src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
     },
   ], */ // 网站关联Google AdSense 与 html格式广告支持
]
