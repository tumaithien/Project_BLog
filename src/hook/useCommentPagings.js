import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actAsyncGetComments } from "../store/comment/actions"

const fnSelectorPost = state => state.Post.postDetail && state.Post.postDetail.id
const fnParentPagingSelector = state => state.Comment.parentPaging
const fnChildrenPagingSelector = (state, parentId) => state.Comment.hasChildrenPaging[parentId]

export function useCommentsPaging({
  parentId = 0,
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
  } = useSelector(state => {
    if(parentId === 0){
      return fnParentPagingSelector(state)
    }
    return fnChildrenPagingSelector(state, parentId)
  })
  const hasMoreComments = currentPage < totalPages

  function handleClickLoadMore() {
    if (loading) {
      return
    }
    setLoading(true)
    dispatch(actAsyncGetComments({
      currentPage: currentPage + 1,
      postId: postId,
      parentId,
      ...extraParams
    })).then(() => {
      setLoading(false)
    })
  }


  return {
    comments,
    total,
    handleClickLoadMore,
    hasMoreComments,
    totalPages,
    loading
  }
}
