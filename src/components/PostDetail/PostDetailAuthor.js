import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { DEFAULT_AVATAR } from "../../constants"
import { genUserLink } from "../../helpers"


function PostDetailAuthor() {

    const post = useSelector(state => state.Post.postDetail)
    const { author, authorId} = post
    const{nickname, description, avatar} = author
    const authorLink = genUserLink(authorId)
    return (
        <div className="post-author">
            <div className="post-author__bg-avatar">
                <Link to={authorLink} className="post-author__avatar">
                    <img src={avatar || DEFAULT_AVATAR} alt={nickname} />
                </Link>
            </div>
            <div className="post-author__nickname">
                <Link to={authorLink}>{nickname}</Link>
            </div>
            <p className="post-author__desc">{description}</p>
        </div>
    )
}

export default PostDetailAuthor