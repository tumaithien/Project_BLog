import './post-detail.css'
import PostDetailComments from './PostDetailComments'
import TagsRelated from '../ArticleItem/TagsRelated'
import { useSelector } from 'react-redux'
import PostRichText from './PostRichText'
import PageAuthen from '../../pages/PageAuthen'
function PostDetailContent() {
    const postContentSelector = useSelector(state => state.Post.postDetail)
    const currentUser = useSelector(state => state.Authen.currentUser)
    const { contet, thumb, title, tagsId } = postContentSelector
    if(!currentUser){
        return (
            <>
                <PageAuthen />
            </>
        )
    }
    return (
        <div className="post-detail__content">
            <div className="thumbnail">
                <img src={thumb} alt={title} />
            </div>
            <div className="content-padding">
                <PostRichText content={contet} />
                <TagsRelated tagsId={tagsId} />
                <PostDetailComments />
            </div>
        </div>
    )
}

export default PostDetailContent