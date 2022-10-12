import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/shared/Button";
import { actAsyncGetArticles } from "../store/post/actions";

export function usePostPagings({ extraParams = {} } = {}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    list: post,
    currentPage,
    totalPages,
    total,
  } = useSelector((state) => state.Post.articlePaging);
  const hasMorePosts = currentPage < totalPages;

  function handleClickLoadMore() {
    if (loading) {
      return;
    }
    setLoading(true);
    dispatch(
      actAsyncGetArticles({
        currentPage: currentPage + 1,
        ...extraParams,
      })
    ).then(() => {
      setLoading(false);
    });
  }
  function renderBtnLoadMore() {
    return (
      hasMorePosts && (
        <div className="text-center">
          <Button
            type="primary"
            size="large"
            Loading={loading}
            onClick={handleClickLoadMore}
          >
            Xem Thêm
          </Button>
        </div>
      )
    );
  }

  return {
    post,
    total,
    renderBtnLoadMore,
  };
}
