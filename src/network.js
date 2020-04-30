import axios from 'axios';
export default ({
    url,
    method = 'get',
    data = {},
    headers = {'Content-Type': 'multipart/form-data'},
    config = {},
    reject = err => {
        console.warn('Request error!\nURL: '+url+'\nError:\n'+err);
        return false;
    },
    resolve = resp => console.log(resp)
} = {}) => {
    axios({
        method,
        url: 'https://clerc.dgz.ru' + url,
        data,
        headers,
        ...config
    }).then(resp => {
        resolve(resp.data);
    }).catch(err => {
        reject(err);
    });
}