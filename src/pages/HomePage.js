import ArticleGeneral from "../components/ArticleGeneral";
import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actAsyncGetArticleGeneral, actAsyncGetArticleLastest, actAsyncGetArticlePopular } from "../store/post/actions";

function HomePage() {

  const dispatch =useDispatch();
  useEffect(() =>{
    dispatch(actAsyncGetArticleLastest())
    dispatch(actAsyncGetArticleGeneral())
    dispatch(actAsyncGetArticlePopular())
  }, [dispatch])
  

  return (
    <>
      <ArticleLatest />
      <ArticleGeneral />
      <ArticlePopular />
    </>
  )
}

export default HomePage