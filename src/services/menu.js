import { api } from "./api"

export const menuService = {
    getAll(){
        return api.call().get('/menus/v1/menus/main-menu-vi')
    },
    getFooterMenu(){
        return api.call().get('/menus/v1/menus/footer-menu')
    }
}

