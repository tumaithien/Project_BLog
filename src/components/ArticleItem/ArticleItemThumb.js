import './article-item.css'
import { Link } from 'react-router-dom'
function ArticleItemThumb({
    slugLink,
    thumb,
    title
}){
    return(
        <>
            <div className="article-item__thumbnail">
                <Link to={slugLink}>
                    <img src={thumb} alt={title} />
                </Link>
            </div>
        </>
    )
}

export default ArticleItemThumb