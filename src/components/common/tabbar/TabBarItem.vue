<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!-- 因为直接添加再slot里有可能会被直接替换导致不生效 因为是插槽 -->
    <!-- <img src="../../assets/img/tabbar/首页.svg" alt="">
    <div>首页</div> -->
  </div>
  <!-- 只能有一个div 却又不能把每个小组件写死 -->
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: false 写在这就写死了 需要改成计算属性用于单独更改
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) != -1
        // 计算属性可以自己判断
        // 判断活跃的path里面有没有我的path 有则我是活跃我是true 因为只有一个所以indexOf可以换成 ==
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path).catch(err => err)
        // 后面的catch是弹幕提供 用于解决重复点击的报错
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }

</style>