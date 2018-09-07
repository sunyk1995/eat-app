import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.defaults.baseURL = 'https://wd6547965802nwnech.wilddogio.com/'
Vue.config.productionTip = false
// router.beforeEach((to,from,next)=>{
// 	alert(1)
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
