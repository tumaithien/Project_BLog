import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actAsyncGetComments } from "../store/comment/actions"

const fnSelectorPost = state => state.Post.postDetail && state.Post.postDetail.id
const fnParentPagingSelector = state => state.Comment.parentPaging

export function useCommentsPaging({
  extraParams = {}
} = {}) {
    const dispatch = useDispatch()
    const postId = useSelector(fnSelectorPost)
    const [loading, setLoading] = useState(false)
    const { 
    list: comments,
        currentPage,
        totalPages,
        total
    } = useSelector(fnParentPagingSelector)
    const hasMoreComments = currentPage < totalPages

    function handleClickLoadMore() {
        if(loading){
          return
        }
        setLoading(true)
        dispatch(actAsyncGetComments({
          currentPage: currentPage + 1,
          postId: postId,
          parentId: 0,
          ...extraParams
        })).then(() => {
          setLoading(false)
        })
          
    }
    return{
        comments,
        total,
        handleClickLoadMore,
        hasMoreComments,
        totalPages
    }
}
