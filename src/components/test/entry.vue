<template>



  <v-app>
    <v-app-bar app color="blue" elevation="1"></v-app-bar>

    <v-main>
      <v-container>
        <h1 style="text-align: center">{{text}}</h1>
        <h1 style="text-align: center">姓名：{{person.name}}</h1>
        <h1 style="text-align: center">年龄：{{person.age}}</h1>
        <h2 style="text-align: center"><a :href="url">跳转</a></h2>

        <v-btn align-center align-content-center depressed color="primary" @click="getMS" v-show="true">
          提示
        </v-btn>

        <v-text-field @keyup.ctrl="myInfo" label="Another input"></v-text-field>

        <b-field v-if="ishow" label="1111">
          <b-input type="password" password-reveal>
          </b-input>
        </b-field>

        <v-btn icon x-large>
          <v-avatar color="purple" size="40">
            <span class="white--text text-h6">毛</span></v-avatar>
        </v-btn>

        <v-btn icon x-large>
          <v-avatar color="purple" size="40">
            <span class="white--text text-h6">{{ person.sex }}</span></v-avatar>
        </v-btn>




      </v-container>
    </v-main>
  </v-app>

</template>

<script>
let person={name:"",
sex:"d"
}

Object.defineProperty(person,"age",{value:13})

console.log(Object.keys(person))

console.log(person)

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "entry",
  data: () => ({
    text:"实训基地管理系统",
    url:"www.baidu.com",
      ishow:false,
    person:{
      name:"毛小文",
      age:20
    },
  }),

  methods:{
  getMS(){
    console.log("@")

    this.$set(this.person,"sex",33)
    this.$parent.getMM()

    return "1"
  },
  myInfo(event){
    console.log(event.key,event.keyCode)
  },

  }
}
</script>

<style scoped>

</style>