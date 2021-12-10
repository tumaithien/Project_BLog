//Action types

import { authServices } from "../../services/auth"


//Action


//Action Async

export function actAsyncLogin(username, password){
    return async dispatch => {
        try {
            const response = await authServices.login(username, password)
            console.log('response',response)
        } catch (error) {
            return {
                ok: false,
                error: 'Username hoặc password không hợp lệ'
            }
        }
    }
}