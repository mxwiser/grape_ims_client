//import 'material-design-icons-iconfont/dist/material-design-icons.css'//md
import '@mdi/font/css/materialdesignicons.css'//mdi

import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';



//Vuetify.config.silent = true //禁用所有Vuetify
Vue.use(Vuetify);

export default new Vuetify({
    theme: { dark: false },
    icons: {
        iconfont: 'mdi', // 'mdiSvg' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
});
