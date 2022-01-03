import { useCommentsPaging } from "../../hook/useCommentPagings"
import CommentAction from "./CommentAction"
import CommentForm from "./CommentForm"
import CommentSection from "./CommentSection"


export default function CommentItem(props) {
    const isThisParent = props.parentId === 0
    
    const { 
        comments: replyComments, 
        handleClickLoadMore
     } = useCommentsPaging({ 
         parentId: props.comments.id
        }) //use paging for CommentItem

    return (
        <>
            <li className="item">
                <CommentSection comments={replyComments} />
                {
                    isThisParent && false && (
                        <ul className="comments">
                            <CommentItem parentId={123456} />
                        </ul>
                    )
                }
                {
                    isThisParent && replyComments.replyCount > 0 && (
                        <CommentAction count={replyComments.replyCount} onClick={handleClickLoadMore} />
                    )
                }
                {
                    isThisParent && false && (
                        <CommentForm />
                    )
                }
            </li>
        </>
    )
}