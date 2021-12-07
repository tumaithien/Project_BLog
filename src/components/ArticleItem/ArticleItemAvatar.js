import './article-item.css'
import cls from 'classnames'
import { Link } from 'react-router-dom'
import { DEFAULT_AVATAR } from '../../constants'


function ArticleItemAvatar(
    {
        className,
        avatar,
        linkAuthor,
        nickname
    }
){

    const classes = cls('article-item__author-image',className)

    return(
        <>
            <div className={ classes }>
                <Link aria-label={nickname} to={linkAuthor}>
                    <img src={avatar || DEFAULT_AVATAR} alt={nickname} />
                </Link>
            </div>
        </>
    )
}

export default ArticleItemAvatar