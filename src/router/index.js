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
        },
        {
          path: '/home',
          component: resolve => require(['../pages/home/home.vue'], resolve),
          meta: {title: '首页'},
          children:[
            {
              path:'index',
              component:resolve => require(['../pages/index/index.vue'], resolve),
            },            
            {
              path:'charts',
              component:resolve => require(['../pages/charts/charts.vue'], resolve),
            },
            {
              path:'forms',
              component:resolve => require(['../pages/forms/forms.vue'], resolve),
            },            
          ]
        },
        {
          path:'/login',
          component:resolve=>require(['../pages/login/login.vue'],resolve)
        },
        {
          path: '*',
            name: 'notfound',
            component:resolve=>require(['../pages/notfound/notfound.vue'],resolve)
        }
      ]
    })