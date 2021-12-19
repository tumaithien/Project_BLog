import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { genUserLink } from "../../helpers"
import { formatRelativeDate } from "../../helpers/day"


function PostDetailHeader() {
    const postDetailSelector = useSelector(state => state.Post.postDetail)
    console.log('postDetailSelector', postDetailSelector)
    const {id, commentCount, author, authorId, title, viewCount, createDate} = postDetailSelector
    const {dateFormated} = formatRelativeDate(createDate)
    return(
        <>
            <div className="post-detail__head">
                    <div className="tcl-container">
                        <h1 className="post-detail__title">{title}</h1>
                        <ul className="post-detail__info">
                            <li className="item author">
                                Bởi <Link to={genUserLink(authorId)}><strong>{author.nickname}</strong></Link>
                            </li>
                            <li className="item date">
                                {dateFormated}
                            </li>
                            <li className="item views">
                                {viewCount} <i className="icons ion-ios-eye" />
                            </li>
                            <li className="item comments">
                                {commentCount} <i className="icons ion-ios-chatbubble" />
                            </li>
                        </ul>
                    </div>
                </div>
        </>
    )
}

export default PostDetailHeader