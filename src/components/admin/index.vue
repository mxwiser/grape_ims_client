<template>
  <v-app >
    <v-app-bar app color="blue" elevation="1"></v-app-bar>

    <v-main>
      <v-container>
        <h1 @click="getMS">1213</h1>
          
      </v-container>
    </v-main>
  </v-app>

</template>

<script>


// import pubsub from "pubsub"

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

  },mounted() {
    
  },mixins: [helperFun],
  
  
}
</script>

<style scoped>

</style>