<template>
  <div class="container-welcome">
    <img src="../../assets/welcome.jpg" alt />
  </div>
</template>

<script>
export default {
  // 这个函数的作用就是你登录后来到welcome这个页面之后会调用get这个接口获取数据

//   created () {
//     this.$http.get('http://ttapi.research.itcast.cn/mp/v1_0/article').then(res => {
//       console.log(res.data)
//     }).catch(() => {
//       console.log('error')
//     })
//   }
}
</script>

<style scoped lang='less'>
img {
  display: block;
  margin: 0 auto;
}
</style>
