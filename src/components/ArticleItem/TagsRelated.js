import './related-posts.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { genTagsLink } from '../../helpers'

function TagsRelated({ tagsId }) {
    const hashTagsById = useSelector(state => state.Tag.hashTagsById)
    return (
        <>
            <div className="post-detail__tags">
                <h2>Tags</h2>
                <ul>
                    {
                        tagsId.map(tagsItemId => {
                            const tags = hashTagsById[tagsItemId]
                            if(!tags){
                                return null
                            }
                            const slugTags = genTagsLink(tags.slug)
                            return(
                                <li className="item" key={tags.id}>
                                    <Link to={slugTags} className="btn btn-default">{tags.name}</Link>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default TagsRelated