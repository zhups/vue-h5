import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from './assets/js/axios'
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css';

// Vue.use(Mint);
Vue.config.productionTip = false
    // Vue.prototype.$axios = axios
new Vue({
    el: '#app',
    router,
    render: h => h(App),
}).$mount('#app')