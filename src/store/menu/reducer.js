import { ACT_GET_MAIN_MENU } from "./action";

const initState ={
    mainMenu: []
}

function reducer(menuState = initState, action) {

    switch (action.type) {
        case ACT_GET_MAIN_MENU:
            return{
                ...menuState,
                mainMenu: action.payload.mainMenu
            }
    
        default:
            return menuState
    }
   
}

export default reducer