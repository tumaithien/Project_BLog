import { ACT_GET_CATEGORY } from "./action"

const initState ={
    hashCategoryById: {},
    isFetched: false
}



function reducer(categoryState = initState, action) {
    switch (action.type) {
        case ACT_GET_CATEGORY:
          return {
            ...categoryState,
            isFetched: true,
            hashCategoryById: action.payload.hashCategoryById
          }
        default:
          return categoryState
      }
}

export default reducer