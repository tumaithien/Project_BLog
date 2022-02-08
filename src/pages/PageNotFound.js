import Button from "../components/shared/Button"


function PageNotFound() {
    return (
        <div className="articles-list section">
            <div className="tcl-container text-center">
                <h1>Không tìm thấy trang</h1>
                <img src="https://d11kg6go43tgrf.cloudfront.net/frontend/images/error.svg" alt="Not found" />
                <Button as="a" size="large" href="/">Trở về trang chủ</Button>
            </div>
        </div>
    )
}

export default PageNotFound