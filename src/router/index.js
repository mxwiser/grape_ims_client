import VueRouter from "vue-router";
import test from  '../components/test/entry'
import testa from  '../components/test/entry'
import notFound from "../components/helper/noFound"
export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/test",
            component:test
        },

        {
            path:"/:pathMatch(.*)*",
            component:notFound
        },
    ]
})

