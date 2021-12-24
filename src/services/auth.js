import { api } from "./api"

export const authServices ={
    login({username,password}){
        return api.call().post('/jwt-auth/v1/token',{
            username,
            password
        })
    },
    getInfoUser(token){
        return api.call().get('/wp/v2/users/me',{
            headers: {
                "Authorization" : 'Bearer ' + token
            }
        })
    },
    register({
        username, nickname, email, password
    }){
        return api.call().post('/wp/v2/users/register',{
            username, nickname, email, password
        })
    },
    changePassword({
        password, newPassword, token
    }){
        return api.call().put('/wp/v2/users/password',{
            password, newPassword
        },{
            headers: {
                "Authorization" : 'Bearer ' + token
            }
        })
    }
}