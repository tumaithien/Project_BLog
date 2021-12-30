import './article-item.css'
import cls from 'classnames'

import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStar from './ArticleItemStar';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemInfo from './ArticleItemInfo';

import { genPostLink, genUserLink } from '../../helpers';

function ArticleItem(
    {
        isStyleRow = false,
        isStyleCard = false,
        isShowDecs = false,
        isShowCategories = false,
        isShowStar = false,
        post,
        isShowAvatar=false,
    }
) {

    const classes = cls('article-item',{
        'style-card': isStyleCard,
        'style-row': isStyleRow
    })
    // const title = post.title;


    if(!post){
        return null
    }
    const { slug, title, author, createDate, thumb, author_id, categoriesId, viewCount, shortDecsHTML } = post
    const slugLink = genPostLink(slug)
    const slugAuthor = genUserLink(author_id)

    return (
        <>
            <article className={classes}>
                <ArticleItemThumb authorName={author.nickname} thumb={thumb} slugLink={slugLink} title={title}  />
                <div className="article-item__content">
                    {isShowCategories && <ArticleItemCategories categoriesId={categoriesId} />}
                    {isShowStar && <ArticleItemStar viewCount={viewCount} />}
                        <ArticleItemTitle children={title} slugLink={slugLink} />
                    {isShowDecs && <ArticleItemDesc shortDecsHTML={shortDecsHTML} />}
                    <ArticleItemInfo 
                        createDate={createDate} 
                        author={author} 
                        authorLink={slugAuthor}
                        isShowAvatar ={isShowAvatar}
                    />
                </div>
            </article>
        </>
    );
}

export default ArticleItem