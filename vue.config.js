module.exports = {
  configureWebpack: {
    resolve: {
      // extensions: [], 配置.vue .js可以不写 默认已经配置过了
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        // this.$store this.$router 可以直接拿到不用写
        // @默认设置为src了
      }
    }
  }
}