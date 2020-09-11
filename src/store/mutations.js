import * as types from './mutation-types'


export default {
    [types.SET_USERINFO](state,data){
        state.userInfo=data;
    },
    [types.SET_CITY](state,data){
        state.city=data
    }
}