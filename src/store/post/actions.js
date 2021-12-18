import { mappingPostData, mappingPostDetailData } from '../../helpers'
import postServices from '../../services/post'

export const ACT_GET_ARTICLE_LASTEST = 'ACT_GET_ARTICLE_LASTEST'

export const ACT_GET_ARTICLE_GENERAL = 'ACT_GET_ARTICLE_GENERAL'

export const ACT_GET_ARTICLE_POPULAR = 'ACT_GET_ARTICLE_POPULAR'

export const ACT_GET_POST_DETAIL = 'ACT_GET_POST_DETAIL'

export const ACT_GET_RELATED_POST = 'ACT_GET_RELATED_POST'


export function actGetArticleLastest(posts){
    return{
        type: ACT_GET_ARTICLE_LASTEST,
        payload:{posts}
    }
}
export function actAsyncGetArticleLastest(){
    return async (dispatch) => {
        try{
            const response = await postServices.getArticleLastest();
            const posts = response.data.map(mappingPostData);
            dispatch(actGetArticleLastest(posts))
        } 
        catch(error){
            //Bắt lỗi
        }
    }
}
export function actGetArticleGeneral({generalPosts, currentPage}) {
    return{
        type: ACT_GET_ARTICLE_GENERAL,
        payload:{generalPosts , currentPage}
    }
}

export function actAsyncGetArticleGeneral({
    currentPage = 1, perPage = 2
} = {}) {
    return async (dispatch) =>{
        try{
            const response = await postServices.getArticleGeneral({currentPage, perPage});
            const generalPosts = response.data.map(mappingPostData);
            dispatch(actGetArticleGeneral({generalPosts, currentPage}))
        }
        catch(error){

        }
    }
}

export function actGetArticlePopular(popularPost) {
    return{
        type: ACT_GET_ARTICLE_POPULAR,
        payload:{popularPost}
    }
}
export function actAsyncGetArticlePopular() {
    return async (dispatch) =>{
        try{
            const response = await postServices.getArticlePopular();
            const popularPosts = response.data.map(mappingPostData);
            dispatch(actGetArticlePopular(popularPosts))
        }
        catch(error){

        }
    }
}

export function actGetPostDetails(post) {
    return{
        type: ACT_GET_POST_DETAIL,
        payload: {post}
    }
}

export function actGetRelatedPost(posts) {
    return{
        type: ACT_GET_RELATED_POST,
        payload: {posts}
    }
}

export function actAsyncGetPostDetails(slug) {
    return async (dispatch) => {
        try {
            const response = await postServices.getDeTail(slug)
            const post = response.data[0]
            if(!post){
                throw new Error('Page not found!')
            }
            const postId = post.id
            const authorId = post.author
            dispatch(actGetPostDetails(mappingPostDetailData(post)))
            await dispatch(actGetAsyncRelatedPost({postId, authorId}))

            return { ok: true }
        } catch (error) {
            return {
                ok:false
            }
        }
    }
}

export function actGetAsyncRelatedPost({postId, authorId}) {
    return async (dispatch) => {
        try {
            const response = await postServices.getList({
                author: authorId,
                per_page: 3,
                exclude: postId
            })
            const posts = response.data.map(mappingPostData)

            dispatch(actGetRelatedPost(posts))
        } catch (error) {
            
        }
    }
}