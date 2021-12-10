import { api } from "./api"

export const authServices ={
    login({
        username,
        password
    }){
        return api.call().post('/jwt-auth/v1/token',{
            username,
            password
        })
    }
}