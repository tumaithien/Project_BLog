import { ACT_LOGIN_SUCCESS } from "./actions";


const initState = {
    currentUser: [],
    token: ''
}

function reducer(authState =initState, action) {
    switch (action.type) {
        case ACT_LOGIN_SUCCESS:
            localStorage.setItem('access_Token', action.payload.token)
            return{
                currentUser: action.payload.user,
                token: action.payload.token
            }
    
        default:
            return authState
    }
    
}

export default reducer