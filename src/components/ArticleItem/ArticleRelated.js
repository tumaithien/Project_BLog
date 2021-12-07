import './related-posts.css'

function ArticleRelated() {
    return (
        <>
            {/* Post Detail Tags */}
            <div className="post-detail__tags">
                <h2>Tags</h2>
                <ul>
                    <li className="item"><a href="#" className="btn btn-default">HTML</a></li>
                    <li className="item"><a href="#" className="btn btn-default">CSS3</a></li>
                    <li className="item"><a href="#" className="btn btn-default">React</a></li>
                    <li className="item"><a href="#" className="btn btn-default">Vue</a></li>
                </ul>
            </div>
            {/* End Post Detail Tags */}
        </>
    )
}

export default ArticleRelated