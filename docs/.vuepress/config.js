const path = require('path')
module.exports = {
  base:'/vue-wheels/',
  title: 'Hello VuePress1',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        title: "入门",
        collapsable: false,
        children: [
          ["/install/", "安装"]
        ]
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          ["/components/tag",'tag'],
          ["/components/button",'button'],
          ["/components/input",'input'],
          ["/components/card",'card'],
          ["/components/tabs",'tabs'],
          ["/components/toast",'toast'],
          ["/components/popover",'popover']
        ]
      },
    ]
  },
  scss:{
    includePaths: [path.join(__dirname, './src/style')]
  }
}