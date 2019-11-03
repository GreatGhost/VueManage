import axios  from 'axios';
import {Toast} from 'vant';

axios.defaults.withCredentials=true;

axios.defaults.baseURL='https://elm.cangdu.org';


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

 export function get(url,params={}){
    return new Promise((resolve,reject)=>{
        axios.get(url,{
            params:params
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>reject(err))
    })
 }


/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 * 
 * `这个很重要，如果没有序列化操作，后台是拿不到你提交的数据的。
 */

export function post(url,params={}){
    return new Promise((resolve,reject)=>{
        axios.post(url,{
            params:params
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>reject(err))
    })
 }