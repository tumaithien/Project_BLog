import { useSelector } from "react-redux"
import PostItemRelated from "./PostItemRelated"


function RelatedPost() {

    const post = useSelector(state => state.Post.relatedPostByAuthor)
    return (
        <div className="related-post">
            <h2 className="related-post__head">Bài viết liên quan</h2>
            {
                post.map(dataItem => <PostItemRelated key={dataItem.id} post={dataItem} />)
            }


        </div>
    )
}

export default RelatedPost