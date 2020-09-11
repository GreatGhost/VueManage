import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios  from 'axios';
import store from './store/'
import {Button,Cell,Toast,Icon} from 'vant'
import './router/routerFilter'

Vue.use(Button);
Vue.use(Icon);
Vue.$toast=Toast;
Vue.config.productionTip = false
Vue.prototype.$axios=axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
