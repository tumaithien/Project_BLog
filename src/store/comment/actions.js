import { mappingPostComment } from "../../helpers"
import commentService from "../../services/comment"


export const ACT_GET_COMMENT_PARENT_POST = 'ACT_GET_COMMENT_PARENT_POST'
export const ACT_GET_COMMENT_REPLY_POST = 'ACT_GET_COMMENT_REPLY_POST'
export const ACT_INIT_COMMENT_CHILDREN_PAGING = 'ACT_INIT_COMMENT_CHILDREN_PAGING'

export function actGetComment({
    currentPage,
    comments,
    total,
    totalPages,
    parentId
}) {
    return{
        type: parentId === 0 ? ACT_GET_COMMENT_PARENT_POST : ACT_GET_COMMENT_REPLY_POST,
        payload: {
            currentPage,
            comments,
            total,
            totalPages,
            parentId
        }
    }
}

export function actInitChildrenPaging(comments) {
    return{
        type: ACT_INIT_COMMENT_CHILDREN_PAGING,
        payload: { comments }
    }
}

export function actAsyncGetComments({
    perPage = 5,
    currentPage = 1,
    postId,
    parentId = 0,
}) {
    return async dispatch => {
        try {
            if(!postId){
                throw new Error('Invalid postId')
            }
            
            const response = await commentService.getList({
                perPage,
                currentPage,
                postId,
                parentId
            })

            const comments = response.data.map(mappingPostComment)
            const total= Number(response.headers['x-wp-total'])
            const totalPages = Number(response.headers['x-wp-totalpages'])
            if(parentId === 0){
                dispatch(actInitChildrenPaging(comments))
            }
            dispatch(actGetComment({
                currentPage,
                comments,
                total,
                totalPages,
                parentId
            }))

        } catch (error) {
            
        }
    }
}