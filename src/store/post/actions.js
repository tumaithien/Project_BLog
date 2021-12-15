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
            console.log('generalPosts', generalPosts)
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