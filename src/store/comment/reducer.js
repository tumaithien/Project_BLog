import { ACT_GET_CHILDREN_COMMENTS_PAGING, ACT_GET_COMMENT_PARENT_POST } from "./actions";

const initState = {
    parentPaging:{
        list: [],
        currentPage: 1
    },
    hasChildrenPaging:{}
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
        case ACT_GET_CHILDREN_COMMENTS_PAGING:
            return{
                ...commentState,
                hasChildrenPaging:{
                    ...commentState.hasChildrenPaging,
                    ...action.payload.comments.reduce((output, commentItem) => {
                        output[commentItem.id] = {
                            list: [],
                            currentPage: 0,
                            total: 0,
                            totalPages: 1
                        }
                        return output
                    }, {})
                }
            }
        default:
            return commentState
    }
}

export default reducer