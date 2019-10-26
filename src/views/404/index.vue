<template>
  <div class="container-error">
  <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang='less'>
.container-error{
  width: 100%;
  height: 100%;
  background: url(../../assets/404.png) no-repeat center / cover;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
