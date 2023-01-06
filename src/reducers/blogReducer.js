import {
  ALL_BLOG_REQUEST,
  ALL_BLOG_SUCCESS,
  ALL_BLOG_FAIL,
} from "../constants/blogConstants.js";

export const blogReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case ALL_BLOG_REQUEST:
      return {
        loading: true,
        blogs: [],
      };
    case ALL_BLOG_SUCCESS:
      return {
        loading: false,
        blogs: action.payload,
      };
    case ALL_BLOG_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
