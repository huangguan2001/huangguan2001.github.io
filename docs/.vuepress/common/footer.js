const { penName, footerTitle } = require("../common/info");
module.exports = {
  // 页脚信息
  createYear: 2021, // 博客创建年份
  copyrightInfo:
    penName + ' | ' + footerTitle, // 博客版权信息，支持a标签
  // penName + ' | ' + footerTitle + '<br> <a href="http://beian.miit.gov.cn/" target="_blank">桂ICP备2021009994号</a>', // 博客版权信息，支持a标签
}