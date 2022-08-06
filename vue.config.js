const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})

module.exports ={
  devServer: {
    // 项目启动端口之后会变成3000
    port: 81,
     host:"0.0.0.0",
  },

 pages: {
      Index:{
          entry: 'src/entries/home/main.js', //入口文件
          template: 'public/index.html', //使用的html模板
          filename: 'index.html' //因为访问路径时会默认访问 index.html 所以将默认显示的置为index.html
      },
      test: {
         entry: 'src/entries/test/main.js', //入口文件
         template: 'public/index.html',
         filename: 'test.html'
     },

 }


}
