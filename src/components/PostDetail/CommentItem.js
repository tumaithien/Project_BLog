import CommentAction from "./CommentAction"
import CommentForm from "./CommentForm"
import CommentSection from "./CommentSection"


export default function CommentItem(props) {
    const isThisParent = props.parentId === 0

    return (
        <>
            <li className="item">
                <CommentSection comments={props.comments} />
                {
                    isThisParent && false && (
                        <ul className="comments">
                            <CommentItem parentId={123456} />
                            <CommentItem parentId={654321} />
                        </ul>
                    )
                }
                {
                    isThisParent && (
                        <CommentAction count={5} />
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