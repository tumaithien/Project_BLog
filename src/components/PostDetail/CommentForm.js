import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { genUserLink } from "../../helpers"
import { actAsyncPostNewComments } from "../../store/comment/actions"
import Button from '../shared/Button'



export default function CommentForm({ parentId }) {

    const [content, setContent] = useState('')
    const isThisParent = parentId === 0
    const currentUser = useSelector(state => state.Authen.currentUser)
    const postId = useSelector(state => state.Post.postDetail?.id)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    if(isThisParent && !currentUser){
        return <p className="text-red">Bạn phải <Link to="/login">đăng nhập</Link> để bình luận bài viết</p>
    }

    function handleChangeComment(evt) {
        setContent(evt.target.value)
    }

    function handleSubmitComment() {
        if(loading) return
        
        setLoading(true)
        dispatch(actAsyncPostNewComments({
            authorId: currentUser.id,
            parentId,
            content,
            postId
        })).then(res => {
            if(res.ok){
                setContent('')
            }else{

            }
            setLoading(false)
        })
        
    }

    const placeHolder = isThisParent ? "Viết bình luận..." : "Viết phản hồi"
    const btnLabel = isThisParent ? "Bình luận" : "Phản hồi"
    return (
        <div className="comments__form">
            <div className="comments__form--control">
                <div className="comments__section--avatar">
                    <Link to={genUserLink(currentUser.id)}>
                        <img src={currentUser.avatar} alt={currentUser.nickname} />
                    </Link>
                </div>
                <textarea placeholder={placeHolder} value={content} name="contentcomment" onChange={handleChangeComment} />
            </div>
            <div className="text-right">
                <Button onClick={handleSubmitComment} Loading={loading}>{btnLabel}</Button>
            </div>
        </div>
    )
}