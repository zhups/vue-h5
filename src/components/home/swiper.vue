<template>
  <div class="home-swiper" >
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(v,k) in banner" :key="k">
        <img class="swiper-image" :src="v.image_path" alt="">
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
        {{ current + 1 }}/4
      </div>
    </van-swipe>
  </div>
</template>

<script>

export default {
  props:['banner'],
  data(){
    return {
      current: 0
    }
  },
  components:{
      
  },
  mounted(){
    console.log(this.banner)
  },
  methods: {
    onChange(index){
      this.current = index;
    }
  }
}
</script>

<style scoped>
.home-swiper{
  width: 100%;
  height: 750px;
}
.swiper-image{
  width: 750px;
  height: 750px;
}
</style>
