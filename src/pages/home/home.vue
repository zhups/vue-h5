<template>
    <div class="wrapper">
        <div class="content">
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
        // this.$axios('getsearchgoodsbylabel',{
        //   data:{label_name:2},
        // }).then(()=>{
        //   console.log(222222)
        // })
        // this.getInt('5454564564561561284','836415458748554')
      },
      methods: {
      },
      components:{
        vTabbar
      }
    }
</script>
