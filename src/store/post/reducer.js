import { ACT_GET_ARTICLE_GENERAL, ACT_GET_ARTICLE_LASTEST, ACT_GET_ARTICLE_POPULAR } from "./actions"



const initState = {
  articlesLatest: [],
  articlesGeneral: [],
  articlesPopular: []
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
        articlesGeneral: action.payload.generalPost
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