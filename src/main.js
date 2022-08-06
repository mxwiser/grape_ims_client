import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false

new Vue({
  VModal,
  vuetify,
  render: h => h(App)
}).$mount('#app')
