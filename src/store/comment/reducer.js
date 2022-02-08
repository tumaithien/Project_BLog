import { getDefaultCmtPaging } from "../../helpers";
import { ACT_GET_COMMENT_REPLY_POST, ACT_GET_COMMENT_PARENT_POST, ACT_INIT_COMMENT_CHILDREN_PAGING, ACT_NEW_COMMENT_PARENT, ACT_NEW_REPLY_COMMENTS } from "./actions";

const initState = {
    parentPaging: getDefaultCmtPaging(),
    hashChildPaging: {}
}

function reducer(commentState = initState, action) {
    let parentId
    switch (action.type) {
        case ACT_NEW_REPLY_COMMENTS:
            parentId = action.payload.comment.parentId
            let currentChildPaging = commentState.hashChildPaging[parentId] // call hashChildPaging by parent ID in array
            return {
                ...commentState,
                hashChildPaging: {
                    ...commentState.hashChildPaging,
                    [parentId]: {
                        ...currentChildPaging,
                        list: [
                            ...currentChildPaging.list,
                            action.payload.comment
                        ],
                        exclude: [
                            ...currentChildPaging.exclude,
                            action.payload.comment.id
                        ]
                    }
                }
            }
        case ACT_NEW_COMMENT_PARENT:
            return {
                ...commentState,
                parentPaging: {
                    ...commentState.parentPaging,
                    list: [
                        action.payload.comment,
                        ...commentState.parentPaging.list,
                    ],
                    exclude: [
                        ...commentState.parentPaging.exclude,
                        action.payload.comment.id
                    ]
                }
            }
        case ACT_GET_COMMENT_PARENT_POST:
            return {
                ...commentState,
                parentPaging: {
                    ...commentState.parentPaging,
                    list: action.payload.currentPage === 1
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
            return {
                ...commentState,
                hashChildPaging: {
                    ...commentState.hashChildPaging,
                    ...action.payload.comments.reduce((output, commentItem) => {
                        output[commentItem.id] = getDefaultCmtPaging()
                        return output
                    }, {})
                }
            }
        case ACT_GET_COMMENT_REPLY_POST:
            parentId = action.payload.parentId
            return {
                ...commentState,
                hashChildPaging: {
                    ...commentState.hashChildPaging,
                    [parentId]: {
                        ...commentState.hashChildPaging[parentId],
                        list: (
                            action.payload.currentPage === 1
                            && commentState.hashChildPaging[parentId].exclude.length === 0
                        )
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