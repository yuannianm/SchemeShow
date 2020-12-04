import axios from 'axios';

axios.interceptors.response.use(success => {
    
    return success.data;
}, error => {
    return error;
})

export const get=(url,params)=>{
    return  axios({
        method:'get',
        url:url,
        data:params        
    })
}
export const post=(url,params)=>{
    return  axios({
        method:'post',
        url:url,
        data:params        
    })
}