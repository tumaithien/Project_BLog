import './article-item.css'
import cls from 'classnames'

function ArticleItemStar(
    className,
    children
) {

    const classes = cls('article-item__stats', className)

    return (
        <>
            <ul className={classes}>
                <li>
                    <i className="icons ion-ios-eye" />
                    <span className="text">0</span>
                </li>
            </ul>

        </>
    )
}

export default ArticleItemStar
