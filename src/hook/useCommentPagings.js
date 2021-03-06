import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDefaultCmtPaging } from "../helpers"
import { actAsyncGetComments } from "../store/comment/actions"

const fnSelectorPost = state => state.Post.postDetail && state.Post.postDetail.id
const fnParentPagingSelector = state => state.Comment.parentPaging
const fnChildrenPagingSelector = (state, parentId) => state.Comment.hashChildPaging[parentId]

export function useCommentsPaging({
  extraParams = {},
  parentId = 0
} = {}) {
  const dispatch = useDispatch()
  const postId = useSelector(fnSelectorPost)
  const [loading, setLoading] = useState(false)
  const {
    list: comments,
        currentPage,
        totalPages,
        total: _total,
        exclude
    } = useSelector(state => {
      if(parentId === 0){
        return fnParentPagingSelector(state)
      }
      return fnChildrenPagingSelector(state, parentId) || getDefaultCmtPaging()
    })
    const hasMoreComments = currentPage < totalPages

    function handleClickLoadMore() {
        if(loading){
          return
        }
        setLoading(true)
        dispatch(actAsyncGetComments({
          currentPage: currentPage + 1,
          postId: postId,
          parentId,
          exclude,
          ...extraParams
        })).then(() => {
          setLoading(false)
        })
          
    }
    return{
        comments,
        total: _total + exclude.length,
        handleClickLoadMore,
        hasMoreComments,
        totalPages,
        loading,
        exclude
    }
}
