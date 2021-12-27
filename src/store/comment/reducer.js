import { ACT_GET_COMMENT_PARENT_POST } from "./actions";

const initState = {
    parentPaging:{
        list: [],
        currentPage: 1
    }
}

function reducer(commentState = initState, action) {
    switch (action.type) {
        case ACT_GET_COMMENT_PARENT_POST:
            return{
                ...commentState,
                parentPaging: {
                    ...commentState.parentPaging,
                    list : action.payload.currentPage === 1 
                    ? action.payload.comments 
                    : [...commentState.parentPaging.list, ...action.payload.comments],
                    total: action.payload.total,
                    totalPages: action.payload.totalPages,
                    currentPage: action.payload.currentPage
                }
                
            }
    
        default:
            return commentState
    }
}

export default reducer