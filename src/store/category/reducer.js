import { ACT_GET_CATEGORY } from "./action"

const initState ={
    hashCategoryById: {}
}

function reducer(categoryState = initState, action) {
    switch (action.type) {
        case ACT_GET_CATEGORY:
          return {
            ...categoryState,
            hashCategoryById: action.payload.hashCategoryById
          }
        default:
          return categoryState
      }
}

export default reducer