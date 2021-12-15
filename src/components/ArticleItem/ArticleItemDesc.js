import './article-item.css'
import cls from 'classnames'


function ArticleItemDesc({
        className,
        shortDecsHTML
    }) {

    const shortDecs = shortDecsHTML.replace('<p>', '').replace('</p>','')
    let strDecs = shortDecs.split(' ').slice(0, 20).join(' ');
    if(strDecs !== shortDecs){
        strDecs += '...'
    }
    const classes = cls('article-item__desc',className)

    return (
        <>
            <p className={classes}>{strDecs}</p>
        </>
    )
}

export default ArticleItemDesc