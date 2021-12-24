import { ACT_GET_FOOTER_MENU, ACT_GET_MAIN_MENU } from "./action";

const initState ={
    mainMenu: [],
    menuFooter: []
}

function reducer(menuState = initState, action) {

    switch (action.type) {
        case ACT_GET_MAIN_MENU:
            return{
                ...menuState,
                mainMenu: action.payload.mainMenu
            }
        case ACT_GET_FOOTER_MENU:
            return{
                ...menuState,
                menuFooter: action.payload.menuFooter
            }
        default:
            return menuState
    }
   
}

export default reducer