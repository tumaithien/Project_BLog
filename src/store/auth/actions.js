//Action types

import { ACCESS_TOKEN, MESSAGE_ERROR } from "../../constants"
import { mappingCurrentUser } from "../../helpers"
import { authServices } from "../../services/auth"

export const ACT_LOGIN_SUCCESS = 'ACT_LOGIN_SUCCESS'
export const ACT_LOGOUT = 'ACT_LOGOUT'
export const ACT_CHANGE_PASSWORD = 'ACT_CHANGE_PASSWORD'
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

export function actChangePassword({newpassword, confirmnewpassword, token}) {
    
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
            dispatch(actLogOut())
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
                error: 'User name hoặc password không hợp lệ'
            }
        }
    }
}

export function actAsyncRegister({nickname, username, email, password}) {
    return async dispatch => {
        try {
            const response = await authServices.register({username, nickname, email, password})
            console.log('response', response)
            const responseLogin = await dispatch(actAsyncLogin(username, password))
            if(responseLogin.ok){
                return { ok:true }
            }
            throw new Error(MESSAGE_ERROR.default)
        } catch (error) {
            window.MY_ERROR = error
            let errorMessage = MESSAGE_ERROR.default
            if(error && error.response && error.response.data.code ){
                const errorData = error.response.data.code;
                errorMessage = MESSAGE_ERROR[errorData] //falseback value
                if(MESSAGE_ERROR[errorData]){
                    errorMessage = MESSAGE_ERROR[errorData]
                }
            }
            return{
                ok: false,
                error: errorMessage
            }
        }
    }
}

export function actAsyncGetInfoCurrentUser(token) {
    return async dispatch => {
        try {
            const response = await authServices.getInfoCurrentUser(token)
            const user = mappingCurrentUser(response.data)
            console.log(user)
        } catch (error) {
            
        }
    }
}

// export function actAsyncGetPassword(password, newpassword, confirmnewpassword) {
//     return async dispatch => {
//         try {
            
//         } catch (error) {
            
//         }
//     }
// }