import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router);

export default new Router({

    mode:'history',
      routes: [
        //默认路径下显示该路由
        {
          path: '/',
          component: resolve => require(['../pages/home/home.vue'], resolve),
          meta: {title: '首页'},
        },{
          path: '/home',
          component: resolve => require(['../pages/home/home.vue'], resolve),
          meta: {title: '首页'},
        }
      ]
    })