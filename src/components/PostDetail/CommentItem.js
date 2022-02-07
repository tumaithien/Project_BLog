import { useState } from "react"
import { useCommentsPaging } from "../../hook/useCommentPagings"
import CommentAction from "./CommentAction"
import CommentForm from "./CommentForm"
import CommentSection from "./CommentSection"


export default function CommentItem(props) {
    const [isShowForm, setIsShowForm] = useState(false)
    const isThisParent = props.parentId === 0
    const { handleClickLoadMore,
        comments: replyComments,
        total,
        exclude,
        loading } = useCommentsPaging({ parentId: props.comments.id }) // Use for childrenPaging
    function handleOnReplyClick() {
        setIsShowForm(!isShowForm)
    }
    return (
        <>
            <li className="item">
                <CommentSection
                    onReplyClick = {handleOnReplyClick}
                    comments={props.comments}
                />
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
                            count={props.comments.replyCount - replyComments.length + exclude.length} 
                            onClick={handleClickLoadMore}
                            Loading={loading} 
                        />
                    )
                }
                {
                    isThisParent && isShowForm && (
                        <CommentForm parentId={props.comments.id} />
                    )
                }
            </li>
        </>
    )
}