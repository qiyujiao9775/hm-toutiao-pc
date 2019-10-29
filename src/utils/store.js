// 提供用户信息存储的相关API
const key = 'hm-toutiao-pc-user-key'
const local = {
  // 1存储
  setUser (user) {
    //   user 对象转换成json字符串
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(key, jsonStr)
  },
  // 2获取
  getUser () {
    //   user 对象转换成json字符串
    const jsonStr = window.sessionStorage.getItem(key)
    return JSON.parse(jsonStr)
  },
  // 3清除
  delUser () {
    //   user 对象转换成json字符串
    window.sessionStorage.removeItem(key)
  }
}
export default local
