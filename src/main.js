import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import vuetify from './plugins/vuetify'
import Test from "@/Test";


Vue.config.productionTip = false

new Vue({
  VModal,
  vuetify,
  render: h => h(App)
}).$mount('#app')

new Vue({vuetify,render: h => h(Test)
}).$mount('#test')