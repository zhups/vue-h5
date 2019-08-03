<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted () {
    this.aaaa()
  },
  methods: {
    aaaa(){
      var a = res=>{
        console.log('ssssssssssssss')
      }
      a()
    }
  },
  components: {
    
  }
}
</script>

<style>
@import "./assets/css/style.css"
</style>
