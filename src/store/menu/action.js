
import { mappingMainMenu } from "../../helpers"
import { menuService } from "../../services/menu"

export const ACT_GET_MAIN_MENU = 'ACT_GET_MAIN_MENU'
export const ACT_GET_FOOTER_MENU = 'ACT_GET_FOOTER_MENU'

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

export function actGetMenuFooter(menuFooter) {
    return{
        type :ACT_GET_FOOTER_MENU,
        payload:{
            menuFooter
        }
    }
}

export function actAsyncGetMenuFooter() {
    return async (dispatch) => {
        try {
            const response = await menuService.getFooterMenu()
            const menuFooter = response.data.items.map(mappingMainMenu)
            dispatch(actGetMenuFooter(menuFooter))
        } catch (error) {
            
        }
    }
}