<template>



  <v-app>
    <v-app-bar app color="blue" elevation="1"></v-app-bar>

    <v-main>
      <v-container>
        <h1 style="text-align: center">{{text}}</h1>
        <h1 style="text-align: center">姓名：{{person.name}}</h1>
        <h1 style="text-align: center">年龄：{{person.age}}</h1>
        <h2 style="text-align: center"><a :href="url">跳转</a></h2>

        <v-btn align-center align-content-center
            depressed
            color="primary"
              @click="myInfo"
        >
          提示
        </v-btn>


        <v-text-field @keydown="myInfo" label="Another input"></v-text-field>

        <b-field label="Password">
          <b-input type="password"
                   value="iwantmytreasure"
                   password-reveal>
          </b-input>
        </b-field>

      </v-container>
    </v-main>
  </v-app>


</template>

<script>
let preson={name:"",
sex:"d"
}

Object.defineProperty(preson,"age",{value:13})

console.log(Object.keys(preson))

console.log(preson)

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "entry",
  data: () => ({
    text:"实训基地管理系统",
    url:"www.baidu.com",
    person:{
      name:"毛小文",
      age:20
    },

  }),
  methods:{

  myInfo(event){
    console.log(event.key,event.keyCode)

  },

  }
}


</script>

<style scoped>

</style>