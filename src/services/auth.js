import { api } from "./api"

export const authServices ={
    login({username,password}){
        return api.call().post('/jwt-auth/v1/token',{
            username,
            password
        })
    },
    getInfoUser(token){
        // return api.call().get('/wp/v2/users/me',{
        //     headers: {
        //         "Authorization" : 'Bearer ' + token
        //     }
        // })
        return api.callWithToken().get('/wp/v2/users/me')
    },
    register({
        username, nickname, email, password
    }){
        return api.call().post('/wp/v2/users/register',{
            username, nickname, email, password
        })
    }
}