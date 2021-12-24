import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { actAsyncGetArticles, actAsyncGetArticleLastest, actAsyncGetArticlePopular } from "../store/post/actions";

import ArticleGeneral from "../components/ArticleGeneral";
import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";

import IconLoading from "../components/shared/IconLoading";
import PageNotFound from './PageNotFound';

function HomePage() {

  const dispatch = useDispatch()
  const [status, setStatus] = useState('loading')

  useEffect(() =>{
    dispatch(actAsyncGetArticleLastest())
    dispatch(actAsyncGetArticles())
    dispatch(actAsyncGetArticlePopular())
    .then(res => {
      if(res.ok){
        setStatus('success')
      }else{
        setStatus('error')
      }
    })
  }, [dispatch])
  
  if(status === 'loading'){
    return(
      <div className="article-list section">
          <div className="tcl-container">
              <div className="tcl-row tcl-jc-center">
                  <IconLoading width="150px" />
              </div>
          </div>
      </div>
    )
  }
  if(status === 'error'){
      return(
          <>
              <PageNotFound />
          </>
      )
  }

  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  )
}

export default HomePage