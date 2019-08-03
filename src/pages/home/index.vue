<template>
  <div class="scroll-list-wrap" :style="'height:'+height+ 'px'">
    <cube-scroll ref="contentScroll">
        <v-swiper :banner="recommends[1] && recommends[1].son"></v-swiper>
    </cube-scroll>
  </div>
</template>

<script>
import vSwiper from '../../components/home/swiper'
export default {
  data(){
    return {
      recommends:{},
      height:document.body.offsetHeight- 50,
    }
  },
  components:{
      vSwiper
  },
  mounted(){
    this.getRecommends()
  },
  methods: {
    getRecommends(){
      this.$axios('getRecommend').then(res=>{
        this.disrecommends(res.recommends)
      })
    },
    disrecommends(data = []){
      for(let i=0,len=data.length;i<len;i++){
        this.recommends[data[i].model_id] = data[i]
      }
      console.log(this.recommends[1].son)
    }
  }
}
</script>

<style scoped>

</style>
