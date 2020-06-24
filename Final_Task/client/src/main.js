import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

Vue.config.productionTip = false

//setting up default vue's http modules from ipi calls
Vue.prototype.$http = axios;
//load token from localstorage
const token = localStorage.getItem('token');
//is there is any token we simply append default axios authorization headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
