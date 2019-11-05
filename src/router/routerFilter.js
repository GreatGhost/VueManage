
import router from './index';
import store from '../store/index';
import * as util from '../util/util'

router.beforeEach((to,from,next)=>{
    if(store.state.userInfo || util.getStore('login-user')||to.name === 'login'){
        next();
    }else{
        next({ name: 'login' }); 
    }
})