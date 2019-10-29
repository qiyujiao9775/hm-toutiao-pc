<template>
  <el-container class="container-home">
    <el-aside :width="isOpen?'200px':'64px'">
      <!-- logo -->
      <div class="logo" :class="{smallLogo:!isOpen}"></div>
      <el-menu
        default-active="/"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border-right:none"
        :collapse-transition="false"
        :collapse="!isOpen"
        router
      >
        <!-- 导航菜单 -->
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>

    </el-aside>
    <el-container>
      <!-- 头 -->
      <el-header>
        <!-- 图标 -->
        <span class="el-icon-s-fold icon" @click="toggleMenu"></span>
        <!-- 文字 -->
        <span class="text">江苏传智播客科技教育有限公司</span>
        <!-- 下拉菜单组件 -->
        <el-dropdown class="dropdown" @command="handleClick">
          <span class="el-dropdown-link">
           <img class="headIcon" :src="userInfo.photo" alt />
            <span class="userName">{{userInfo.name}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <!-- <el-dropdown-item icon="el-icon-setting" @click.native="setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock" @click.native="logout">退出登录</el-dropdown-item> -->
             <el-dropdown-item icon="el-icon-setting" command="setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock" command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <!-- 内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import local from '@/utils/store'
export default {
  data () {
    return {
      isOpen: true,
      userInfo: {}// 定义对象 用户信息 为空
    }
  },
  // 获取用户信息
  created () {
    // 设置用户信息
    const user = local.getUser() || {}// {}代表null
    this.userInfo.name = user.name
    this.userInfo.photo = user.photo
  },

  methods: {
    toggleMenu () {
      this.isOpen = !this.isOpen
      console.log(this)
    },
    // 一》个人设置的点击事件
    // 事件未触发： click事件
    // 给组件绑定事件    组件不支持  事件不触发
    // 把事件绑定在组件解析后原生dom？
    // 事件修饰符：stop  Provent  once native把事件绑定原生dom
    // setting () {
    //   this.$router.push('/setting')
    // },
    setting () {
      this.$router.push('/setting')
    },

    logout () {
      this.$router.push('/login')
    },
    handleClick (command) {
    // command 值  setting | logout
    // this[command]() === this.setting()
    // this[logout]() === this.logout()
      this[command]()
    }
  }
}
</script>

<style scoped lang='less'>
.container-home {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  .el-aside {
    background: #002033;
    .logo {
      width: 100%;
      height: 60px;
      background: #002244 url(../../assets/logo_admin.png) no-repeat center /
        140px auto;
    }
    .smallLogo {
      background-image: url(../../assets/logo_admin_01.png);
      background-size: 36px auto;
    }
  }
  .el-header {
    border-bottom: 1px solid #ddd;
  }
  .el-header {
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    .icon {
      font-size: 30px;
      vertical-align: middle;
    }
    .text {
      margin-left: 10px;
      vertical-align: middle;
    }
    .dropdown {
      float: right;
      .headIcon {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .userName {
        font-weight: bold;
        vertical-align: middle;
        margin-left: 5px;
      }
    }
  }
  .smallLogo {
    background-image: url(../../assets/logo_admin_01.png);
    background-size: 36px auto;
  }
}
</style>
