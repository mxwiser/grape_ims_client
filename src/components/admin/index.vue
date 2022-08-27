<template>
  <v-app >
    <v-app-bar app color="blue" elevation="1"></v-app-bar>

    <v-main>
      <v-container>

      </v-container>
    </v-main>
  </v-app>

</template>

<script>


// import pubsub from "pubsub"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index",
  data: () => ({
    carousels: [
      { text: 'Slide 1', color: 'primary' },
      { text: 'Slide 2', color: 'info' },
      { text: 'Slide 3', color: 'success' },
      { text: 'Slide 4', color: 'warning' },
      { text: 'Slide 5', color: 'danger' }
    ],
    pause: false,
    text:"11",
    url:"www.baidu.com",
    ishow:false,
    isActive: true,
    person:{
      name:"毛小文",
      age:20,
    },
  }),
  methods:{
    getMS(){
      
    },
    myInfo(){
    },
  },
}
</script>

<style scoped>

</style>