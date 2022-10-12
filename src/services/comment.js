import { api } from "./api";

const commentService = {
  getList({
    perPage = 5,
    currentPage = 1,
    postId,
    parentId,
    ...restParams
  } = {}) {
    return api.call().get("/wp/v2/comments", {
      params: {
        page: currentPage,
        per_page: perPage,
        post: postId,
        parent: parentId,
        lang: "vi",
        order: "asc",
        ...restParams,
      },
    });
  },
  createOne({ authorId, content, postId, parentId }) {
    return api.callWithToken().post("/wp/v2/comments", {
      author: authorId,
      content,
      post: postId,
      parent: parentId,
    });
  },
};

export default commentService;
