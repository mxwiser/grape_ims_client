import VueRouter from "vue-router";
import test from  '../components/test/entry'
import notFound from "../components/helper/noFound"
import admin from "@/components/admin";

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/test",
            component:test
        },
        {
            path:"/admin",
            component:admin
        },
        {
            path:"/:pathMatch(.*)*",
            component:notFound
        },
    ]
})

