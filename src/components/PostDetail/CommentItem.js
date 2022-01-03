import { useCommentsPaging } from "../../hook/useCommentPagings"
import CommentAction from "./CommentAction"
import CommentForm from "./CommentForm"
import CommentSection from "./CommentSection"


export default function CommentItem(props) {
    const isThisParent = props.parentId === 0
    const { handleClickLoadMore,
        comments: replyComments, 
        loading } = useCommentsPaging({ parentId: props.comments.id }) // Use for childrenPaging

    return (
        <>
            <li className="item">
                <CommentSection comments={props.comments} />
                {
                    isThisParent && replyComments?.length > 0 && (
                        <ul className="comments">
                            {
                                replyComments.map(replyCmtItem => {
                                    return (
                                        <CommentItem 
                                            key={replyCmtItem.id} 
                                            parentId={props.comments.id} 
                                            comments={replyCmtItem} 
                                        />
                                    )
                                })
                            }
                        </ul>
                    )
                }
                {
                    isThisParent && props.comments.replyCount > 0 &&  (
                        <CommentAction 
                            count={props.comments.replyCount - replyComments.length} 
                            onClick={handleClickLoadMore}
                            Loading={loading} 
                        />
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