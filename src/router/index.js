import VueRouter from "vue-router";
import test from  '../components/test/entry'
import notFound from "../components/helper/404"
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

