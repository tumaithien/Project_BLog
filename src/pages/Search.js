import '../components/ArticlePopular/popular-news-list.css'
import MainTitle from '../components/shared/MainTitle'
import ArticleItem from '../components/ArticleItem'
import { getQueryStr } from '../helpers'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actAsyncGetArticles } from '../store/post/actions'
import { usePostPagings } from '../hook/usePostPagings'
function Search() {
    const dispatch = useDispatch()
    const location = useLocation();
    let locationStr = location.search;
    locationStr = getQueryStr('q');

    const {post, total, renderBtnLoadMore} = usePostPagings({
        extraParams:{
            search: locationStr
        }
    })
    useEffect(() => {
        dispatch(actAsyncGetArticles({
            search: locationStr
        }))
    }, [dispatch, locationStr])
    
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
                        post.map(dataItem => {
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
                            renderBtnLoadMore()
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Search