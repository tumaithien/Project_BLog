import ArticleItem from "../ArticleItem";
import Button from "../shared/Button"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { actAsyncGetArticleGeneral } from "../../store/post/actions";

function ArticleGeneral() {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const { list: selectorPostGeneral, currentPage } = useSelector(state => state.Post.articlePaging)
  function handleClickLoadMore() {
    if(loading){
      return
    }
    setLoading(true)
    dispatch(actAsyncGetArticleGeneral({
      currentPage: currentPage + 1
    })).then(() => {
      setLoading(false)
    })
  }
  return (
    <>
      <div className="articles-list section">
        <div className="tcl-container">
          {/* Main Title */}
          <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
            <h2>News List</h2>
            <Button href="/" type="default" as="a">View More</Button>
          </div>
          {/* End Main Title */}
          {/* End Row News List */}
          <div className="tcl-row">
            {
              selectorPostGeneral.map(dataItem => {
                return (
                  <div className="tcl-col-12 tcl-col-md-6" key={dataItem.id}>
                    <ArticleItem isStyleCard isShowAvatar={false} post={dataItem} ></ArticleItem>
                  </div>
                )
              })
            }
          </div>
          {/* End Row News List */}
          {/* Btn Loadmore */}
          <div className="text-center">
            <Button
              type="primary" 
              size="large"
              Loading={loading}
              onClick={handleClickLoadMore}
              >Xem Thêm
            </Button>
          </div>
        </div>
      </div>

    </>
  );
}

export default ArticleGeneral