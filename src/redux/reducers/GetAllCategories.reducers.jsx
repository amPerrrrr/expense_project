import * as types from "../actions";

const initialStateCategories = {
    categories: [],
    loading: false,
    error: null,
    statusCode: null,
    totalCount: 0,
    totalPage: 0,
  };

  const categories = (state = initialStateCategories, action) => {
    switch (action.type) {
      case types.GET_ALL_CATEGORIES_REQUEST:
        return { ...state, loading: true };
      case types.GET_ALL_CATEGORIES_SUCCESS:
        return {
          ...state,
          loading: false,
          categories: action.categories,
          totalCount: action.totalCount,
          totalPage: action.totalPage,
        };
      case types.GET_ALL_CATEGORIES_FAILED:
        return {
          ...state,
          loading: false,
          error: action.error,
          statusCode: action.statusCode,
        };
        case types.CLEAR_ALL_CATEGORIES:
          return {
            ...state,
            categories: [],
            loading: false,
            error: null,
            statusCode: null,
            totalCount: 0,
            totalPage: 0,
          };
      default:
        return state;
    }
  };
  
export default categories;  