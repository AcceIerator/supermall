import {debounce} from "common/utils"
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
      // 1.图片加载完成的事件监听
      this.newRefresh = debounce(this.$refs.scroll.refresh, 500)

      // 对监听的事件进行保存
      this.itemImgListener = () => {
        // console.log('itemImgListener')
        this.newRefresh()
      }
      this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    listenShowBackTop(position) {
      this.isShowBackTop = (-position.y) > 1000
    }
  }
}