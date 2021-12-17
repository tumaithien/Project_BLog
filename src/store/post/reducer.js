import { ACT_GET_ARTICLE_GENERAL, ACT_GET_ARTICLE_LASTEST, ACT_GET_ARTICLE_POPULAR } from "./actions"



const initState = {
  articlesLatest: [],
  articlesPopular: [],
  // articlesGeneral: []
  articlePaging:{
    list: [],
    currentPage: 1,
  }
}


function reducer(postState = initState, action) {
  switch (action.type) {
    case ACT_GET_ARTICLE_LASTEST:
      return {
        ...postState,
        articlesLatest: action.payload.posts
      }
    case ACT_GET_ARTICLE_GENERAL:
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
          currentPage: action.payload.currentPage
        }
      }
    case ACT_GET_ARTICLE_POPULAR:
      return {
        ...postState,
        articlesPopular: action.payload.popularPost
      }
    default:
      return postState
  }
}
export default reducer