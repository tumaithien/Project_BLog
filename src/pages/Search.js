import '../components/ArticlePopular/popular-news-list.css'
import MainTitle from '../components/shared/MainTitle'
import ArticleItem from '../components/ArticleItem'
import Button from '../components/shared/Button'
import { getQueryStr } from '../helpers'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { actAsyncGetArticles } from '../store/post/actions'
function Search() {
    const location = useLocation();
    let locationStr = location.search;
    locationStr = getQueryStr('q');
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(actAsyncGetArticles({
            search: locationStr
        }))
    }, [dispatch, locationStr])
    const {
        list: selectorArticles,
        currentPage,
        totalPages, total
    } = useSelector(state => state.Post.articlePaging)

    const hasMorePosts = currentPage < totalPages

    function handleClickLoadMore() {
        if(loading){
            return
        }
        setLoading(true)
        dispatch(actAsyncGetArticles({
            currentPage: currentPage + 1,
            search: locationStr
        })).then(() => {
            setLoading(false)
        })
    }
    return (
        <div>
            <div className="articles-list section">
                <div className="tcl-container">
                    <MainTitle type="search">{total} kết quả tìm kiếm cho từ khóa "{locationStr}"</MainTitle>
                    <div className="tcl-row tcl-jc-center">
                        <div className="tcl-col-12 tcl-col-md-8">
                            <ArticleItem 
                                isStyleCard 
                                isShowCategories 
                            >
                            </ArticleItem>
                        </div>
                    </div>
                    {
                        selectorArticles.map(dataItem => {
                            return(
                                <div className="tcl-row tcl-jc-center" key={dataItem.id}>
                                    <div className="tcl-col-12 tcl-col-md-8">
                                        <ArticleItem post={dataItem} isStyleCard isShowCategories></ArticleItem>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="text-center">
                        {
                            hasMorePosts && <Button onClick={handleClickLoadMore} Loading={loading} type="primary" size="large">Tải thêm</Button>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Search