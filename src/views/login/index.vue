<template>
  <div class="container">
    <!-- 登录卡片 -->
    <el-card>
      <!-- logo -->
      <img src="../../assets/logo.png" width="50px" height="50px" alt />
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
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
          <el-button style="width:100%;" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import local from '@/utils/store.js'
export default {
  data () {
    const checkMobile = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不对'))
      }
    }

    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 获取表单组件实例 ---> 调用校验函数

      // 发请求 校验手机号和验证码  后台
      this.$refs['loginForm'].validate(async valid => {
        // if (valid) {
        //   // 发请求 校验手机号和验证码  后台
        //   this.$http
        //     .post('authorizations', this.loginForm)
        //     .then(res => {
        //       // 成功
        //       this.$router.push('/')
        //       // 保存用户信息(token) 把 存储用户信息的操作封装
        //       local.setUser(res.data.data)
        //     })
        //     .catch(() => {
        //       // 失败 提示
        //       this.$message.error('手机号或验证码错误')
        //     })
        // }
        if (valid) {
          // 当一段代码不能保证一定没有报错
          //  try {} catch (e) {}     exeption()意外捕获异常处理异常
          try { // 成功
            const { data: { data } } = await this.$http.post('authorizations', this.loginForm)
            local.setUser(data)
            this.$router.push('/')
          } catch (e) {
            this.$message.error('手机号或验证码错误')
          }
        }
      })
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
