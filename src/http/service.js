import {get,post} from './http';


export const getCity = (param) => get('/v1/cities',param);