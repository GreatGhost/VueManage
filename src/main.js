import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios  from 'axios';
import store from './store/'
import {Button,Cell,Toast} from 'vant'

Vue.use(Button);
Vue.$toast=Toast;
Vue.config.productionTip = false
Vue.prototype.$axios=axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
