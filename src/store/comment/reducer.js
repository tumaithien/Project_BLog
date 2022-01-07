import { ACT_GET_COMMENT_REPLY_POST, ACT_GET_COMMENT_PARENT_POST, ACT_INIT_COMMENT_CHILDREN_PAGING, ACT_NEW_COMMENT_PARENT } from "./actions";

const initState = {
    parentPaging:{
        list: [],
        currentPage: 1
    },
    hashChildPaging:{ }
}

function reducer(commentState = initState, action) {
    switch (action.type) {
        case ACT_NEW_COMMENT_PARENT:
            return{
                ...commentState,
                parentPaging:{
                    ...commentState.parentPaging,
                    list:[
                        action.payload.comment,
                        ...commentState.parentPaging.list,
                    ]
                }
            }
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
        case ACT_INIT_COMMENT_CHILDREN_PAGING:
            //Input: [{id: 10}, {id: 20}]
            //Output: {20:paging}
            return{
                ...commentState,
                hashChildPaging:{
                    ...commentState.hashChildPaging,
                    ...action.payload.comments.reduce((output, commentItem) => {
                         output[commentItem.id] = {
                             list: [],
                             currentPage: 0,
                             total: 0,
                             totalPage: 1,
                         }
                         return output
                    }, {})
                }
            }
        case ACT_GET_COMMENT_REPLY_POST:
            const parentId = action.payload.parentId
           return{
               ...commentState,
               hashChildPaging:{
                   ...commentState.hashChildPaging,
                   [parentId]:{
                        ...commentState.hashChildPaging[parentId],
                        list : action.payload.currentPage === 1 
                        ? action.payload.comments 
                        : [...commentState.hashChildPaging[parentId].list, ...action.payload.comments],
                        total: action.payload.total,
                        totalPages: action.payload.totalPages,
                        currentPage: action.payload.currentPage
                   }
               }
           }
        default:
            return commentState
    }
}

export default reducer