import { mappingPostComment } from "../../helpers"
import commentService from "../../services/comment"

export const ACT_GET_CHILDREN_COMMENTS_PAGING = 'ACT_GET_CHILDREN_COMMENTS_PAGING'
export const ACT_GET_COMMENT_PARENT_POST = 'ACT_GET_COMMENT_PARENT_POST'
export const ACT_GET_COMMENT_REPLY = 'ACT_GET_COMMENT_REPLY'


export function actGetComment({
    currentPage,
    comments,
    total,
    totalPages,
    parentId
}) {
    return{
        type: parentId === 0 ? ACT_GET_COMMENT_PARENT_POST : ACT_GET_COMMENT_REPLY,
        payload: {
            currentPage,
            comments,
            total,
            totalPages
        }
    }
}

export function actGetChildrenPaging(comments) {
    return{
        type: ACT_GET_CHILDREN_COMMENTS_PAGING,
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
                dispatch(actGetChildrenPaging(comments))
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