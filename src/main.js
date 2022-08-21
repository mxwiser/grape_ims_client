//Vue
import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import VModal from 'vue-js-modal'

//plugins
import axios from "axios";
Vue.prototype.axios=axios


import vuetify from './plugins/vuetify'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

//Router
import VueRouter from "vue-router";
import routes from './router'

//mixin
import {helperFun} from "@/mixin";
Vue.mixin(helperFun)

//vuex
import store from './store'






//

Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(VModal)





new Vue({
  vuetify,
  render: h => h(App),
  store,
  router:routes
}).$mount('#app')

