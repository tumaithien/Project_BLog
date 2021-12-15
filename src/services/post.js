import { api } from './api'

const postServices ={
    getList(params){
        return api.call().get('/wp/v2/posts',{
            params:{
                ...params,
                lang: 'vi'
            }
        })
    },

    getArticleLastest(){
        return postServices.getList({
            per_page: 3,
            page: 1
        })
    },

    getArticleGeneral({
        currentPage = 1,
        perPage =2
    }){
        return postServices.getList({
            per_page: perPage,
            page: currentPage
        })
    },
    getArticlePopular(){
        return postServices.getList({
            per_page: 3,
            page: 1,
            orderby: 'post_views'
        })
    }
}

export default postServices