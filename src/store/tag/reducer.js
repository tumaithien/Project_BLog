import { ACT_GET_TAGS } from "./action"

const initState = {
    hashTagsById: {}
}

function reducer(tagState = initState, action) {
    switch (action.type) {
        case ACT_GET_TAGS:
            return{
                ...tagState,
                hashTagsById: action.payload.hashTagsById
            }
            
    
        default:
            return tagState
    }
}

export default reducer