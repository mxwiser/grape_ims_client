<template>

  <div>
    <h1 style="text-align: center">{{text}}</h1>
    <h1 style="text-align: center">姓名：{{person.name}}</h1>
    <h1 style="text-align: center">年龄：{{person.age}}</h1>
    <h2 style="text-align: center"><a :href="url">跳转</a></h2>
  </div>



</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "entry",
  data: () => ({
    text:"实训基地管理系统",
    url:"www.baidu.com",
    person:{
      name:"毛小文",
      age:20
    }
  })
}
</script>

<style scoped>

</style>