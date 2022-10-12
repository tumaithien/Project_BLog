import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { genUserLink } from "../../helpers";
import { formatRelativeDate } from "../../helpers/day";

function CommentSection({ comments, onReplyClick }) {
  const { authorAvatar, authorName, content, createDate, authorId } = comments;
  const currentUser = useSelector((state) => state.Authen.currentUser);
  const authorLink = genUserLink(authorId);
  const { dateFormated, dateRelative } = formatRelativeDate(createDate, true);

  return (
    <div className="comments__section">
      <div className="comments__section--avatar">
        <Link to={authorLink}>
          <img src={authorAvatar} alt={authorName} />
        </Link>
      </div>
      <div className="comments__section--content">
        <Link to={authorLink} className="comments__section--user">
          {authorName}
        </Link>
        <p className="comments__section--time" title={dateRelative}>
          {dateFormated}
        </p>
        <div
          className="comments__section--text"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        {comments.parentId === 0 && !currentUser && (
          <i
            className="ion-reply comments__section--reply"
            onClick={onReplyClick}
          ></i>
        )}
      </div>
    </div>
  );
}

export default CommentSection;
