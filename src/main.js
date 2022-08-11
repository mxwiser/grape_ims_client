//Vue
import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'

//plugins
import vuetify from './plugins/vuetify'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

//Router
import VueRouter from "vue-router";
import routes from './router'
//import Test from "@/entries/Test/Test";


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(VModal)

new Vue({
  vuetify,
  render: h => h(App),
  router:routes
}).$mount('#app')

