import { Link } from "react-router-dom"


function PageAuthen() {
    return (
        <div className="articles-list section">
            <div className="tcl-container text-center">
                <h1>Vui lòng đăng nhập để xem chi tiết bài viết</h1>
                    <Link to="/login">Đăng nhập</Link>
            </div>
        </div>
    )
}

export default PageAuthen