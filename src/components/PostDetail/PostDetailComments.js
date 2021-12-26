import CommentForm from './CommentForm'
import CommentItem from './CommentItem'
import './comments.css'

function PostDetailComments() {
    return (
        <>
            <div className="post-detail__comments">
                <CommentForm />
                <p>20 Comments</p>
                <ul className="comments">
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                </ul>
            </div>
        </>
    )
}

export default PostDetailComments