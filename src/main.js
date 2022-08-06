import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import vuetify from './plugins/vuetify'
import VueRouter from "vue-router";
import routes from './router'
//import Test from "@/entries/Test/Test";


Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  VModal,
  vuetify,
  render: h => h(App),
  router:routes
}).$mount('#app')

