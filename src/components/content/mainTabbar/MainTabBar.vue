<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/首页.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/首页-活跃.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/分类.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/分类-活跃.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/购物车.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/购物车-活跃.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/个人.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/个人-活跃.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>