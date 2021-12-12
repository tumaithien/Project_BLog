//Action types

import { ACCESS_TOKEN } from "../../constants"
import { mappingCurrentUser } from "../../helpers"
import { authServices } from "../../services/auth"

export const ACT_LOGIN_SUCCESS = 'ACT_LOGIN_SUCCESS'
export const ACT_LOGOUT = ' ACT_LOGOUT'
//Action
export function actLoginSuccess({user, token}){
    return{
        type: ACT_LOGIN_SUCCESS,
        payload:{
            user,
            token
        }
    }
}

export function actLogOut() {
    return {
        type: ACT_LOGOUT
    }
}

//Action Async
export function actAsyncGetInfoUser(token){

    return async dispatch => {
        if(token === undefined){
            token = localStorage.getItem(ACCESS_TOKEN)
        }
        try {
            const response = await authServices.getInfoUser(token)
            const user = mappingCurrentUser(response.data)
            dispatch(actLoginSuccess({user, token}))
            return{
                ok: true
            }
        } catch (error) {
            localStorage.removeItem(ACCESS_TOKEN)
            return{
                ok: false,
                error: 'Có lỗi xảy ra từ hệ thống, vui lòng quay lại sau'
            }
        } 
    }
}

export function actAsyncLogin(username, password){
    return async dispatch => {
        try {
            const response = await authServices.login({username, password})
            const token = response.data.token
            const preponseMe = await dispatch(actAsyncGetInfoUser(token))
            return{
                ok: preponseMe.ok,
                error: preponseMe.error
            }
        } catch (error) {
            return {
                ok: false,
                error: 'Username hoặc password không hợp lệ'
            }
        }
    }
}