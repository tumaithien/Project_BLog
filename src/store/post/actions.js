import { mappingPostData, mappingPostDetailData } from "../../helpers";
import postServices from "../../services/post";
import { actAsyncGetComments } from "../comment/actions";

export const ACT_GET_ARTICLE_LASTEST = "ACT_GET_ARTICLE_LASTEST";
export const ACT_GET_ARTICLES = "ACT_GET_ARTICLES";
export const ACT_GET_ARTICLE_POPULAR = "ACT_GET_ARTICLE_POPULAR";
export const ACT_GET_POST_DETAIL = "ACT_GET_POST_DETAIL";
export const ACT_GET_RELATED_POST = "ACT_GET_RELATED_POST";
export const ACT_CLEAR_POST_DETAIL = "ACT_CLEAR_POST_DETAIL";
export const ACT_INCREASE_COMMENT_COUNT = "ACT_INCREASE_COMMENT_COUNT";
export const ACT_GET_RELATED_TAGS_POST = "ACT_GET_RELATED_TAGS_POST";

export function actGetArticleLastest(posts) {
  return {
    type: ACT_GET_ARTICLE_LASTEST,
    payload: { posts },
  };
}
export function actAsyncGetArticleLastest() {
  return async (dispatch) => {
    try {
      const response = await postServices.getArticleLastest();
      const posts = response.data.map(mappingPostData);
      dispatch(actGetArticleLastest(posts));
      return { ok: true };
    } catch (error) {
      return {
        ok: false,
      };
    }
  };
}
export function actGetArticles({
  generalPosts,
  currentPage,
  total,
  totalPages,
}) {
  return {
    type: ACT_GET_ARTICLES,
    payload: {
      generalPosts,
      currentPage,
      total,
      totalPages,
    },
  };
}

export function actAsyncGetArticles({
  currentPage = 1,
  perPage = 2,
  ...restParam
} = {}) {
  return async (dispatch) => {
    try {
      const response = await postServices.getArticle({
        currentPage,
        perPage,
        ...restParam,
      });
      const total = Number(response.headers["x-wp-total"]);
      const totalPages = Number(response.headers["x-wp-totalpages"]);
      const generalPosts = response.data.map(mappingPostData);
      dispatch(
        actGetArticles({
          generalPosts,
          currentPage,
          total,
          totalPages,
        })
      );
      return { ok: true };
    } catch (error) {
      return {
        ok: false,
      };
    }
  };
}

export function actGetArticlePopular(popularPost) {
  return {
    type: ACT_GET_ARTICLE_POPULAR,
    payload: { popularPost },
  };
}
export function actAsyncGetArticlePopular() {
  return async (dispatch) => {
    try {
      const response = await postServices.getArticlePopular();
      const popularPosts = response.data.map(mappingPostData);
      dispatch(actGetArticlePopular(popularPosts));
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
      };
    }
  };
}

export function actGetPostDetails(post) {
  return {
    type: ACT_GET_POST_DETAIL,
    payload: { post },
  };
}

export function actClearPostDetails() {
  return {
    type: ACT_CLEAR_POST_DETAIL,
  };
}

export function actAsyncGetPostDetails(slug) {
  return async (dispatch) => {
    try {
      const response = await postServices.getDeTail(slug);
      const post = response.data[0];
      if (!post) {
        throw new Error("Page not found!");
      }
      const postId = post.id;
      const authorId = post.author;
      const categoriesId = post.categories;
      dispatch(actGetPostDetails(mappingPostDetailData(post)));
      dispatch(actGetAsyncRelatedPost({ postId, authorId }));
      dispatch(actAsyncGetComments({ postId }));
      dispatch(actGetAsyncRelatedTagPost({ postId, categoriesId }));
      return { ok: true };
    } catch (error) {
      return {
        ok: false,
      };
    }
  };
}

export function actGetRelatedPost(posts) {
  return {
    type: ACT_GET_RELATED_POST,
    payload: { posts },
  };
}

export function actGetAsyncRelatedPost({ postId, authorId }) {
  return async (dispatch) => {
    try {
      const response = await postServices.getList({
        author: authorId,
        per_page: 3,
        exclude: postId,
      });

      const posts = response.data.map(mappingPostData);
      dispatch(actGetRelatedPost(posts));
    } catch (error) {}
  };
}

export function actGetRelatedTagPost(posts) {
  return {
    type: ACT_GET_RELATED_TAGS_POST,
    payload: { posts },
  };
}

export function actGetAsyncRelatedTagPost({ postId, categoriesId }) {
  return async (dispatch) => {
    try {
      const response = await postServices.getList({
        categories: categoriesId,
        per_page: 3,
        exclude: postId,
      });
      const posts = response.data.map(mappingPostData);
      dispatch(actGetRelatedTagPost(posts));
    } catch (error) {}
  };
}

export function actGetIncreaseCommentCount() {
  return {
    type: ACT_INCREASE_COMMENT_COUNT,
  };
}
