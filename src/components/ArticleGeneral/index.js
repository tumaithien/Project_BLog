

import { usePostPagings } from "../../hook/usePostPagings";
import ArticleItem from "../ArticleItem";

function ArticleGeneral() {
  
  const {post, renderBtnLoadMore} = usePostPagings()
  
  return (
    <>
      <div className="articles-list section">
        <div className="tcl-container">
          {/* Main Title */}
          <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
            <h2>Danh sách bài viết</h2>
          </div>
          {/* End Main Title */}
          {/* End Row News List */}
          <div className="tcl-row">
            {
              post.map(dataItem => {
                return (
                  <div className="tcl-col-12 tcl-col-md-6" key={dataItem.id}>
                    <ArticleItem isStyleCard isShowAvatar={false} post={dataItem} ></ArticleItem>
                  </div>
                )
              })
            }
          </div>
          {/* Btn Loadmore */}
          {
            renderBtnLoadMore()
          }
        </div>
      </div>

    </>
  );
}

export default ArticleGeneral