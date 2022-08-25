//Vue
import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'

//axios
import axios from "axios";
if (process.env.VUE_APP_MY_API_URL!=""){
  console.log("@VUE_APP_MY_API_URL:"+process.env.VUE_APP_MY_API_URL)
  axios.defaults.baseURL=process.env.VUE_APP_MY_API_URL
}
//Vue.prototype.axios=axios


//UI
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






//VUE USE
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(VModal)




//VUE
new Vue({
  vuetify,
  render: h => h(App),
  store,
  axios,
  router:routes
}).$mount('#app')

