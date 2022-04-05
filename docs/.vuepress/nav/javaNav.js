// Java导航栏
module.exports = {
  text: 'Java', link: '/java/',  // 目录页链接，此处 link 是 vdoing 主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  items: [
    {
      text: 'java基础',
      items: [
        { text: 'Java基础', link: '/javase/' },
        { text: 'Java注解', link: '/javase/annotation/' },
        { text: 'Java反射', link: '/javase/reflex/' },
        { text: 'JavaJUC', link: '/javase/juc/1/' },
        { text: 'JavaJVM', link: '/java/jvm/' },
      ]
    },
    {
      text: 'Java容器',
      items: [
        { text: 'JavaWeb', link: '/javaweb/concept/' },
      ]
    },
    {
      text: 'Java版本新特性',
      items: [
        { text: 'Java新特性', link: '/java/new-features/' },
      ]
    },
  ]
}