import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { genUserLink } from "../../helpers"



export default function CommentForm({ parentId }) {

    const [content, setContent] = useState('')
    const isThisParent = parentId === 0
    const currentUser = useSelector(state => state.Authen.currentUser)
    if(isThisParent && !currentUser){
        return <p className="text-red">Bạn phải <Link to="/login">đăng nhập</Link> để bình luận bài viết</p>
    }

    function handleChangeComment(evt) {
        setContent(evt.target.value)
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
                <textarea placeholder={placeHolder} value={content} onChange={handleChangeComment} />
            </div>
            <div className="text-right">
                <button className="btn btn-default">{btnLabel}</button>
            </div>
        </div>
    )
}