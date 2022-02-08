import axios from 'axios'
import { ACCESS_TOKEN, BASE_URL } from '../constants';


export const api = {
    call(){
        return axios.create({
            baseURL: BASE_URL,
            method: 'GET'
          });
    },
    callWithToken(){
        return axios.create({
            baseURL: BASE_URL,
            headers:{
                Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
            }
        })
    }
}