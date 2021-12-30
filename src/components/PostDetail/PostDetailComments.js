import { useCommentsPaging } from '../../hook/useCommentPagings'
import CommentAction from './CommentAction'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'
import './comments.css'

const handleMapComments = commnetItems => (
    <CommentItem
        key={commnetItems.id}
        parentId={commnetItems.parentId} 
        comments={commnetItems} 
    />
)
function PostDetailComments() {
    
    const {comments, total, handleClickLoadMore, hasMoreComments} = useCommentsPaging()

    return (
        <>
            <div className="post-detail__comments">
                <CommentForm />
                <p>{total} Bình luận</p>
                {
                    comments.length > 0 && (
                        <ul className="comments">
                            {
                                comments.map(handleMapComments)
                            }
                        </ul>
                    )
                }
                {
                    hasMoreComments && 
                    <CommentAction 
                    spacingTop
                    parent={true} 
                    count={total - comments.length}
                    onClick={handleClickLoadMore}
                 />
                }
            </div>
        </>
    )
}

export default PostDetailComments