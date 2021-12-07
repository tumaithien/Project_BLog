import './article-item.css'
import cls from 'classnames'
import Button from '../shared/Button'

function ArticleItemCategories(
    {
        className,
        btnLabel = "News",
        btnProps = {
            type: 'category',
            as: 'a',
            href: '#'
        }
    }
){

    const classes = cls('article-item__categories',className)

    return(
        <>
            <ul className={classes}>
                <li>
                    <Button { ...btnProps}>{btnLabel}</Button>
                </li>
            </ul>
        </>
    )
}

export default ArticleItemCategories