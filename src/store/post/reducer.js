import { ACT_INCREASE_COMMENT_COUNT, ACT_CLEAR_POST_DETAIL, ACT_GET_ARTICLES, ACT_GET_ARTICLE_LASTEST, ACT_GET_ARTICLE_POPULAR, ACT_GET_POST_DETAIL, ACT_GET_RELATED_POST } from "./actions"



const initState = {
  articlesLatest: [],
  articlesPopular: [],
  // articlesGeneral: []
  articlePaging:{
    list: [],
    currentPage: 1,
  },
  postDetail: null,
  relatedPostByAuthor: []
}


function reducer(postState = initState, action) {
  switch (action.type) {
    case ACT_INCREASE_COMMENT_COUNT:
      return {
        ...postState,
        postDetail:{
          ...postState.postDetail,
          commentCount: postState.postDetail.commentCount ++
        }
      }
    case ACT_GET_ARTICLE_LASTEST:
      return {
        ...postState,
        articlesLatest: action.payload.posts
      }
    case ACT_GET_ARTICLES:
      return {
        ...postState,
        articlePaging: {
          ...postState.articlePaging,
          list: action.payload.currentPage === 1
          ? action.payload.generalPosts
          : [
            ...postState.articlePaging.list,
            ...action.payload.generalPosts
          ]
          ,
          total: action.payload.total,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage
        }
      }
    case ACT_GET_ARTICLE_POPULAR:
      return {
        ...postState,
        articlesPopular: action.payload.popularPost
      }
    case ACT_GET_POST_DETAIL:
      return {
        ...postState,
        postDetail: action.payload.post
      }
    case ACT_GET_RELATED_POST:
      return {
        ...postState,
        relatedPostByAuthor: action.payload.posts
      }
    case ACT_CLEAR_POST_DETAIL:
      return {
        ...postState,
        postDetail: null
      }
    default:
      return postState
  }
}
export default reducer