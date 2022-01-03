import Button from "../components/shared/Button"


function PageNotFound() {
    return (
        <div className="articles-list section">
            <div className="tcl-container text-center">
                <h1>Không tìm thấy trang</h1>
                <Button as="a" href="/">Trở về trang chủ</Button>
            </div>
        </div>
    )
}

export default PageNotFound