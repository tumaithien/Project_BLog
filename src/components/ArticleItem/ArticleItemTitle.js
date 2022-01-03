import './article-item.css'
import cls from 'classnames'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { getQueryStr, highlightText } from '../../helpers'

function ArticleItemTitle(
    {
        children,
        className,
        slugLink,
        ...restProps
    }
){
    const location = useLocation()
    const queryStr = getQueryStr('q', location)

    const classes = cls('article-item__title', className)
    return(
        <>
            <h2 className={classes}>
                {
                    queryStr 
                    ? <Link to={slugLink}>
                        <span dangerouslySetInnerHTML={{__html: highlightText(queryStr, children)}} />
                        
                        </Link>
                    : <Link to={slugLink}>{children}</Link>
                }
            </h2>
        </>
    )
}

export default ArticleItemTitle