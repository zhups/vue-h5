<template>
  <div class="scroll-list-wrap" :style="'height:'+height+ 'px'">
    <cube-scroll  
        ref="contentScroll"
        :data="content">
        <ul class="imgs-wrapper">
            <li v-for="(item, index) in content" :key="index" class="imgs-item">
            <img :src="item.url" @load="onImgLoad">
          </li>
        </ul>
    </cube-scroll>
  </div>
</template>

<script>
const imgs = [
  {
    url: 'https://dpubstatic.udache.com/static/dpubimg/7EzIhoEvnG/toutiao_12.JPG'
  },
  {
    url: 'https://dpubstatic.udache.com/static/dpubimg/GR0Piaf5sz/toutiao_21.JPG'
  },
  {
    url: 'https://dpubstatic.udache.com/static/dpubimg/K1JqUN8HSA/toutiao_31.JPG'
  }
]
console.log(document.body.offsetHeight)
export default {
  data(){
    return {
      options: {
        pullDownRefresh: {
          threshold: 60,
          stop:44,
          stopTime: 1000,
          txt: '更新成功'
        },
        // pullUpLoad: true
      },
      height:document.body.offsetHeight- 50,
      content: imgs,
      secondStop: 0
    }
  },
  components:{
  },
  mounted(){

  },
  methods: {
    onPullingDown(){
      console.log('onPullingDown')
     setTimeout(() => {

        this.$refs.contentScroll.scrollTo(0, this.secondStop, 300)
      }, 1000)
    },
    onPullingUp(){
      console.log('onPullingUp')
      setTimeout(() => {
        // this.$refs.contentScroll.refresh()
      }, 1000)
    },
    onImgLoad() {
      const contentScroll = this.$refs.contentScroll
      // contentScroll.scroll.beforePullDown && contentScroll.refresh()
      contentScroll.refresh()
      console.log('运行了')
    }
  }
}
</script>

<style scoped>
.scroll-list-wrap{
  overflow: hidden;
}
.sImg{
  width: 500px;
  height: auto;
}
.imgs-wrapper li img{
  width: 100%;
  /* height: 677px; */
}
</style>
