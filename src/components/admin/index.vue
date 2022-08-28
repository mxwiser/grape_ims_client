<template>
  <v-app >

  <bar></bar>
    <v-main>
      <v-container>
        <h1 @click="getMS">1213</h1>
          
      </v-container>
    </v-main>
  </v-app>

</template>

<script>


// import pubsub from "pubsub"
import bar from "@/components/admin/bar";
import { helperFun } from '@/mixin';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index",
  data: () => ({

  }),
  methods:{
    getMS(){
      this.clsVV("dd")

    },
    myInfo(){
    },
  },components:{
    bar,
  },mounted() {
    
  },mixins: [helperFun],
  
  
}
</script>

<style scoped>

</style>