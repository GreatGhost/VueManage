import * as types from './mutation-types'
import * as service from '../http/service'
export default {
     async getCity({commit,state}){
         let res=await service.getCity({type:'guess'})
         commit(types.SET_CITY,res)
    },
 
}