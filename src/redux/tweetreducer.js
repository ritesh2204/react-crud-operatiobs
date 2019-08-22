import _ from "lodash";
import { TWEETS_REQUEST, TWEETS_RESPONSE, TWEETS_ERROR } from "./tweetaction";

const initialState = {
  tweets: [],
  error: null,
  isFetching: false,
  page: 1,
  limit: 10
};

const tweetReducer = function(state = initialState, action) {
  switch (action.type) {
    case TWEETS_REQUEST:
      return {
        ...state,
        isFetching: action.payload.page > 1 ? false : true,
        error: null,
        page: action.payload.page
      };
    case TWEETS_RESPONSE:
      const newData = [...state.tweets, ...action.payload];
      const dataDistinct = _.map(_.keyBy(newData, "id"), obj => obj);
      return {
        ...state,
        isFetching: false,
        tweets: dataDistinct
      };
    case TWEETS_ERROR:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default tweetReducer;
