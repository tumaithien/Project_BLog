import './latest-news-list.css'
import ArticleItem from '../ArticleItem'
import MainTitle from '../shared/MainTitle'
import { useSelector } from 'react-redux';


function ArticleLatest() {

    const selectorPost = useSelector(state => state.Post.articlesLatest)

    return (
        <div className="latest-news section">
            <div className="tcl-container">
                <MainTitle>Latest News</MainTitle>
                <div className="latest-news__list spacing">
                    {
                        selectorPost.map(dataItem => {
                            return (
                                <div className="latest-news__card" key={dataItem.id}>
                                    <ArticleItem 
                                        post={dataItem}
                                        isShowAvatar={true}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
}

export default ArticleLatest