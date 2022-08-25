<template>
  <v-app >
    <v-app-bar app color="blue" elevation="1"></v-app-bar>

    <v-main>
      <v-container>

        <b-carousel  :pause-info="pause">
          <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`">
              <div class="hero-body has-text-centered">
                <h1 class="title">{{carousel.text}}</h1>
              </div>
            </section>
          </b-carousel-item>
        </b-carousel>


        <h1 style="text-align: center">{{text}}</h1>

        <v-btn align-center align-content-center depressed color="primary" @click="getMS" v-show="true">
          提示
        </v-btn>



        <b-field v-if="ishow" label="1111">
          <b-input type="password" password-reveal>
          </b-input>
        </b-field>

        <v-btn icon x-large>
          <v-avatar color="purple" size="40">
            <span class="white--text text-h6">A</span></v-avatar>
        </v-btn>

        <v-btn icon x-large>
          <v-avatar color="purple" size="40">
            <span class="white--text text-h6">{{ person.sex }}</span></v-avatar>
        </v-btn>
        <section>
          <br/>
          <br/>
          <b-message
              title="公告"
              v-model="isActive"
              type="is-info"
              aria-close-label="Close message">
           最近库存需要清算,暂停借物服务
          </b-message>
          <b-message
              title="通报"
              type="is-danger"
              aria-close-label="Close message">
            0805 1k电阻库存丢失
          </b-message>
        </section>
      </v-container>
    </v-main>
  </v-app>

</template>

<script>




import axios from "axios";

export default {



  // eslint-disable-next-line vue/multi-word-component-names
  name: "entry",
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
      //console.log(this.u)
      //Vue.prototype.func.methods.setVV(this.person)

      axios.get('/user?ID=12345')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

      this.setVV(this.person)
      return "1"
    },
    myInfo(event){
      console.log(event.key,event.keyCode)
    },
  },

}
</script>

<style scoped>

</style>