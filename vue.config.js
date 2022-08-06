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

  transpileDependencies: [
    'vuetify'
  ]
}
