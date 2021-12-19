import './post-author.css'
import PostDetailAuthor from './PostDetailAuthor'
import RelatedPost from './RelatedPost'

function PostDetailSlidebar() {
    return (
        <>
            <div className="post-detail__side">
                <PostDetailAuthor />
                <div className="spacing" />
                <RelatedPost />
            </div>
        </>
    )
}

export default PostDetailSlidebar