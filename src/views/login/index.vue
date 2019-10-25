<template>
  <div class="container">
    <!-- 登录卡片 -->
    <el-card>
      <!-- logo -->
      <img src="../../assets/logo.png" width="50px" height="50px" alt />
      <el-form :model="loginForm">
        <el-form-item>
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:235px;margin-right:10px"
          ></el-input>
          <el-button type="primary">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style lang="less">
// 全屏容器
.container {
  width: 100%;
  height: 100%;
  // 背景尺寸 background-size 拆分写法
  //   组合写法 background:    / 背景尺寸(width,height) 简写 cover 铺面整个容器多余看不见  contain 等比例缩放完整的显示在容器内容
  background: pink;
  position: absolute;
  left: 0;
  top: 0;
}
// 饿了么组件 el-card 组件名称  解析成HTML  后组件根元素上默认生成一个类和组件的名称一致
.el-card {
  width: 400px;
  height: 340px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    display: block;
    margin: 0 auto 20px;
  }
}
</style>
