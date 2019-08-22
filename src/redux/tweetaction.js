import RestClient from "../utils/RestClient";
export const TWEETS_REQUEST = "TWEETS_REQUEST";
export const TWEETS_RESPONSE = "TWEETS_RESPONSE";
export const TWEETS_ERROR = "TWEETS_ERROR";

const tweetRequestActionType = payload => ({ type: TWEETS_REQUEST, payload });
const tweetResponseActionType = payload => ({ type: TWEETS_RESPONSE, payload });
const tweetErrorActionType = payload => ({ type: TWEETS_ERROR, payload });

export const getTweetsAction = payload => dispatch => {
  dispatch(tweetRequestActionType(payload));
  RestClient.get(
    `/tweets?_page=${payload.page}&_limit=${payload.limit}`,
    (err, data) => {
      if (err) {
        dispatch(tweetErrorActionType(err));
      } else {
        dispatch(tweetResponseActionType(data));
      }
    }
  );
};
