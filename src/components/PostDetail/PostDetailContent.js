import './post-detail.css'
import PostDetailComments from './PostDetailComments'
import TagsRelated from '../ArticleItem/TagsRelated'
import { useSelector } from 'react-redux'
import PostRichText from './PostRichText'
function PostDetailContent() {
    const postContentSelector = useSelector(state => state.Post.postDetail)
    const {contet, thumb, title} = postContentSelector
    return (
        <>
            <div className="post-detail__content">
                <div className="thumbnail">
                    <img src={thumb} alt={title} />
                </div>
                <div className="content-padding">
                    <PostRichText content={contet} />
                    <TagsRelated />
                    <PostDetailComments />
                </div>
            </div>
        </>
    )
}

export default PostDetailContent