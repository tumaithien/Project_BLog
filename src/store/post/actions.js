import { mappingPostData } from '../../helpers'
import postServices from '../../services/post'

export const ACT_GET_ARTICLE_LASTEST = 'ACT_GET_ARTICLE_LASTEST'

export const ACT_GET_ARTICLE_GENERAL = 'ACT_GET_ARTICLE_GENERAL'

export const ACT_GET_ARTICLE_POPULAR = 'ACT_GET_ARTICLE_POPULAR'


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
            console.log('posts', posts);
            dispatch(actGetArticleLastest(posts))
        }
        catch(error){
            //Bắt lỗi
        }
    }
}
export function actGetArticleGeneral(generalPost) {
    return{
        type: ACT_GET_ARTICLE_GENERAL,
        payload:{generalPost}
    }
}

export function actAsyncGetArticleGeneral() {
    return async (dispatch) =>{
        try{
            const response = await postServices.getArticleGeneral();
            const generalPosts = response.data.map(mappingPostData);
            console.log('generalPosts',generalPosts)
            dispatch(actGetArticleGeneral(generalPosts))
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
            console.log('popularPosts', popularPosts)
            dispatch(actGetArticlePopular(popularPosts))
        }
        catch(error){

        }
    }
}