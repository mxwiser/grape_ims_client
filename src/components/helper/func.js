import Vue from "vue";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    methods:{
        setVV(v){
            Vue.set(v,"sex",33)
        }
    }
}