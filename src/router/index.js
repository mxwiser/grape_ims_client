import VueRouter from "vue-router";
import test from  '../components/test/entry'
export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/test",
            component:test
        },
    ]
})

