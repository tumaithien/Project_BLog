import MainTitle from "../shared/MainTitle"
import './popular-news-list.css'
import ArticleItem from '../ArticleItem'
import { useSelector } from "react-redux"

function ArticlePopular() {
    const selectorPostPopular = useSelector(state => state.Post.articlesPopular)
    console.log(selectorPostPopular)

    return (
        <>
            {/* Popular News Section */}
            <div className="popular-news section bg-white-blue">
                <div className="tcl-container">
                    {/* Main Title */}
                    <MainTitle btnLabel="View more" btnProps={{type: 'category'}}>Popular Article</MainTitle>
                    {/* End Main Title */}
                    <div className="popular-news__list spacing">
                        <div className="popular-news__list--left">
                            <div className="popular-news__list--row">
                                {/* Popular news card */}
                                <div className="popular-news__list--card">
                                    <ArticleItem isStyleCard isShowCategories post={selectorPostPopular[0]} />
                                </div>
                                {/* End Popular news card */}
                                {/* Popular news card */}
                                <div className="popular-news__list--card">
                                    <ArticleItem isStyleCard isShowCategories post={selectorPostPopular[1]} />
                                </div>
                                {/* End Popular news card */}
                            </div>
                        </div>
                        <div className="popular-news__list--right">
                            <div className="popular-news__list--row">
                                {/* Popular news card */}
                                <div className="popular-news__list--card">
                                <ArticleItem isStyleCard isStyleRow isShowCategories post={selectorPostPopular[2]} />
                                </div>
                                {/* End Popular news card */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Popular News Section */}

        </>
    )
}

export default ArticlePopular