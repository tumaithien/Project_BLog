import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actAsyncGetComments } from '../../store/comment/actions'
import CommentAction from './CommentAction'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'
import './comments.css'

function PostDetailComments() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actAsyncGetComments())
    })


    return (
        <>
            <div className="post-detail__comments">
                <CommentForm />
                <p>20 Comments</p>
                <ul className="comments">
                    <CommentItem parentId={0} />
                    <CommentItem />
                    <CommentItem />
                    <CommentAction parent={true} count={20} />
                </ul>
            </div>
        </>
    )
}

export default PostDetailComments