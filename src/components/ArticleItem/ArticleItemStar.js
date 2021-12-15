import './article-item.css'
import cls from 'classnames'

function ArticleItemStar(
    {
        className,
        viewCount
    }
) {

    const classes = cls('article-item__stats', className)
    return (
        <>
            <ul className={classes}>
                <li>
                    <i className="icons ion-ios-eye" />
                    <span className="text">{viewCount}</span>
                </li>
            </ul>

        </>
    )
}

export default ArticleItemStar
