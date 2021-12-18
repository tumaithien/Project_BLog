import { useSelector } from "react-redux"
import { formatRelativeDate } from "../../helpers/day"


function PostDetailHeader() {
    const postDetailSelector = useSelector(state => state.Post.postDetai)
    const {id, commentCount, author, authorId, title, viewCount, createDate} = postDetailSelector
    const {dateFormated, dateRelative} = formatRelativeDate(createDate)
    return(
        <>
            {/* Post Detail Head */}
            <div className="post-detail__head">
                    <div className="tcl-container">
                        <h1 className="post-detail__title">{title}</h1>
                        <ul className="post-detail__info">
                            <li className="item author">
                                By <a href="/"><strong>{author.nickname}</strong></a>
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
                {/* End Post Detail Head */}
        </>
    )
}

export default PostDetailHeader