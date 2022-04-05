// nav
const toolNav = require("../nav/toolNav");
const frontEnd = require("../nav/frontEnd");
const indexNav = require("../nav/indexNav");
const moreNav = require("../nav/moreNav");
module.exports = [
  {
    text: '首页', link: '/'
  },
  {
    text: '导航站', link: '/navigation/'
  },
  frontEnd,  // 前端导航
  toolNav,  // 工具导航
  moreNav,   // 更多导航
  indexNav,   //索引导航
  {
    text: '留言区', link: '/message-area/'
  },
]
