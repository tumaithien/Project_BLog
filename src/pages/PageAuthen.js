import Button from "../components/shared/Button"


function PageAuthen() {
    return (
        <div className="articles-list section">
            <div className="tcl-container text-center">
                <h1>Vui lòng đăng nhập để xem chi tiết bài viết</h1>
                <Button as="a" href="/login">Đăng nhập</Button>
            </div>
        </div>
    )
}

export default PageAuthen