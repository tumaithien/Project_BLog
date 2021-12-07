import './article-item.css'
import cls from 'classnames'


function ArticleItemDesc(
    {
        className
    }
) {

    const classes = cls('article-item__desc',className)

    return (
        <>
            <p className={classes}>Markdown is a lightweight markup language with plain-text-formatting
                syntax. Its design allows it to…</p>
        </>
    )
}

export default ArticleItemDesc