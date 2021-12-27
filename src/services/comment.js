import {api} from './api'

const commentService = {
    getList({
        perPage = 2,
        currentPage = 1,
        postId,
        parentId,
        ...restParams
    } = {}){
        return api.call().get('/wp/v2/comments',{
            params: {
                page: currentPage,
                per_page: perPage,
                post: postId,
                parent: parentId,
                lang: 'vi',
                ...restParams
            }
        })
    }
}

export default commentService