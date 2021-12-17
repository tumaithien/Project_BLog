
import { mappingMainMenu } from "../../helpers"
import { menuService } from "../../services/menu"

export const ACT_GET_MAIN_MENU = 'ACT_GET_MAIN_MENU'

export function actGetMenu(mainMenu) {
    return{
        type: ACT_GET_MAIN_MENU,
        payload: { mainMenu }
    }
}

export function actAsyncGetMenu() {
    return async (dispatch) => {
        try {
            const reponse = await menuService.getAll()
            const mainMenu = reponse.data.items.map(mappingMainMenu)
            dispatch(actGetMenu(mainMenu))
        } catch (error) {
            
        }
    }
}