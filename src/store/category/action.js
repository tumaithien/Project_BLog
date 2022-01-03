import { handleHashCategory } from "../../helpers"
import categoryService from "../../services/category"

//Action Type
export const ACT_GET_CATEGORY = 'ACT_GET_CATEGORY'

//Action 
export function actGetAllCategory(hashCategoryById) {
    return{
        type: ACT_GET_CATEGORY,
        payload:{hashCategoryById}
    }
}

//Action Async
export function actAsyncAllCategory() {
    return async (dispatch) => {
        try {
            const response = await categoryService.getList()
            const categories = response.data
            const hashCategoryById = handleHashCategory(categories)
            dispatch(actGetAllCategory(hashCategoryById))
        } catch (error) {
            
        }
    }
}