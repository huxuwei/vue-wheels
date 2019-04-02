const path = require('path')
module.exports = {
  base:'/vue-wheels/',
  title: 'vue-wheels',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/huxuwei/vue-wheels' },
    ],
    sidebar: [
      {
        title: "入门",
        collapsable: false,
        children: [
          ["/install/", "介绍"]
        ]
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          ["/components/tag",'tag'],
          ["/components/button",'button'],
          ["/components/card",'card'],
          ["/components/tabs",'tabs'],
          ["/components/input",'input'],
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