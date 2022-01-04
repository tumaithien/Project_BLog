import { Link } from "react-router-dom"
import { genUserLink } from "../../helpers"
import { formatRelativeDate } from "../../helpers/day"


function CommentSection({ comments }) {

    const {authorAvatar, authorName, content, createDate, authorId} = comments
    const authorLink = genUserLink(authorId)
    const {dateFormated, dateRelative} = formatRelativeDate(createDate, true)

    return (
        <div className="comments__section">
            <div className="comments__section--avatar">
                <Link to={authorLink}>
                    <img src={authorAvatar} alt={authorName} />
                </Link>
            </div>
            <div className="comments__section--content">
                <Link to={authorLink} className="comments__section--user">{authorName}</Link>
                <p className="comments__section--time" title={dateRelative}>{dateFormated}</p>
                <p className="comments__section--text" dangerouslySetInnerHTML={{
                    __html: content
                }}>
                </p>

            </div>
        </div>
    )
}

export default CommentSection