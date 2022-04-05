const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

const { penName, title } = require('./common/info')

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // 如果使用 locales 的 title 和 description，则下方的 title 和 description 失效
  // title: penName + title,
  // description: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
  // lang: 'zh-CN',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 显示代码块的行号
  },
  // 多语言支持
  locales: {
    '/': {
      lang: 'zh-CN',
      title: penName + title,
      description: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown'
    },
    // '/en/': {
    //   lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //   title: penName + title,
    //   description: 'Evan Huang personal blog, built by vuepress, uses the vdoing theme to learn Java, web, framework, microservices, tools, front-end and other related knowledge, record life and technology journey, and share programming skills at the same time'
    // }
  },
  head,
  plugins,
  themeConfig,
}
