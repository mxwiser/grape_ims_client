import Vue from "vue";
export const helperFun={
    methods:{
        setVV(v){
            Vue.set(v,"sex",33)
        },
        clsVV(v){
            console.log(v)
        }
    }
}