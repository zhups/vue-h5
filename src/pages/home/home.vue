<template>
    <div class="wrapper">
        <div class="home-content">
            <transition name="move" mode="out-in">
              <router-view></router-view>
            </transition>
        </div>
        <v-tabbar></v-tabbar>
    </div>
</template>

<script>
import vTabbar from '../../components/tabbar';
export default {
  data () {
    return {
      name:'',
      jsonData:{},
      arrData:[]
    }
  },
  mounted () {
  },
  methods: {
  },
  components:{
    vTabbar
  }
    }
</script>

<style>
.home-content{
  height: calc(100% - 50px);
}
</style>

