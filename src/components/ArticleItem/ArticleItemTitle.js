import './article-item.css'
import cls from 'classnames'
import { Link } from 'react-router-dom'

function ArticleItemTitle(
    {
        children,
        className,
        slugLink,
        ...restProps
    }
){
    const classes = cls('article-item__title', className)

    return(
        <>
            <h2 className={classes}>
                <Link to={slugLink}>{children}</Link>
            </h2>
        </>
    )
}

export default ArticleItemTitle