import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './assets/js/axios.js'
import { Scroll, Loading } from 'cube-ui' // 
import { Tabbar, TabbarItem, Skeleton, Swipe } from 'vant';
import store from './vuex/stores'
import "amfe-flexible/index.js";
console.log(Swipe)
Vue.config.productionTip = false

Vue.use(Tabbar)
    .use(TabbarItem)
    .use(Skeleton)
    .use(Swipe)
    .use(Scroll)
    .use(Loading);
Vue.prototype.$axios = axios
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
}).$mount('#app')