import { mappingPostComment } from "../../helpers"
import commentService from "../../services/comment"


export const ACT_GET_COMMENT_PARENT_POST = 'ACT_GET_COMMENT_PARENT_POST'


export function actGetComment({
    currentPage,
    comments,
    total,
    totalPages
}) {
    return{
        type: ACT_GET_COMMENT_PARENT_POST,
        payload: {
            currentPage,
            comments,
            total,
            totalPages
        }
    }
}


export function actAsyncComments({
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
            console.log('response', response)
            const total= Number(response.headers['x-wp-total'])
            const totalPages = Number(response.headers['x-wp-totalpages'])
            dispatch(actGetComment({
                currentPage,
                comments,
                total,
                totalPages
            }))

        } catch (error) {
            
        }
    }
}