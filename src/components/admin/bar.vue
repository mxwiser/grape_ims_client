<template>
  <v-app-bar  app color="blue" elevation="1">

    <v-app-bar-nav-icon class="d-sm-none"></v-app-bar-nav-icon>
    <!--src="@/assets/logo-h.png"-->


    <img  class="abc"  src="@/assets/logo-h.png">

    &nbsp;&nbsp;
    <div class="text-h6 bt" v-text="text"></div>
    &nbsp;&nbsp;
    <div class="d-none d-sm-flex  text-h7  bt1" v-text="text1"></div>

  </v-app-bar>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "bar",
  data:()=>({
    text:"实训基地管理系统",
    text1:"电子信息学院"
  })
}
</script>

<style scoped>
.abc{
  height: 70%;
  pointer-events: none;
}
.bt{
  color: #E3F2FD;
}
.bt1{
  color: #BBDEFB;
}

</style>