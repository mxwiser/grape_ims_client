//Vue
import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'

//plugins
import axios from "axios";
import vuetify from './plugins/vuetify'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'


//Router
import VueRouter from "vue-router";
import routes from './router'

//import Test from "@/entries/Test/Test";


//globals
import funks from "@/components/helper/func";
Vue.prototype.func=funks






Vue.prototype.axios=axios
Vue.config.productionTip = false





Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(VModal)

new Vue({
  vuetify,
  render: h => h(App),
  router:routes,
  methods:{
    getMM() {
      alert("")
    }
  }

}).$mount('#app')

