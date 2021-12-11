import './article-item.css'
import { useSelector } from 'react-redux'
import cls from 'classnames'
import { Link } from 'react-router-dom'

function ArticleItemCategories(
    {
        className,
        categoriesId
    }
) {
    const hashCategoryById = useSelector(state => state.Category.hashCategoryById)
    const classes = cls('article-item__categories', className)
    
    return (
        <>
            <ul className={classes}>
                {
                    categoriesId.map(dataId => {
                        const category = hashCategoryById[dataId]
                        if(!category){
                            return null
                        }
                        const slugLink = '/category/'+ category.slug
                        return (
                            <li key={category.id}>
                                <Link to={slugLink} className="btn btn-category">{category.name}</Link>
                            </li>
                        )
                    })
                }

            </ul>
        </>
    )
}

export default ArticleItemCategories