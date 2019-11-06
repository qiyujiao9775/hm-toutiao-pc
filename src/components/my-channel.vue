<template>
  <el-select :value="value" @change="fn"  placeholder="请选择" clearable>
    <!-- <el-option v-for="item in channelOptions" :key="item.id" :label="item.name" :value="item.id"></el-option> -->
     <el-option v-for="item in channelOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
  </el-select>
</template>

<script>
export default {
  name: 'my-channel',
  props: ['value'],
  data () {
    return {
      // value: null,
      channelOptions: []
    }
  },
  // 获取
  created () {
    this.getChannelOptions()
  },
  methods: {
    // 值改变函数
    fn (channelId) {
      // 把数据提交父组件
      if (channelId === '') channelId = null
      this.$emit('input', channelId)
    },
    // 实现
    async getChannelOptions () {
      const {
        data: { data }
      } = await this.$http.get('channels')
      this.channelOptions = data.channels
    }
  }
}
</script>

<style scoped lang='less'></style>
