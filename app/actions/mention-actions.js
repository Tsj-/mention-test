import {get} from "../server/index";

export const REQUEST_MENTIONS = 'REQUEST_MENTIONS'
function requestMentions() {
  return {
    type: REQUEST_MENTIONS
  }
}


export const RECEIVE_MENTIONS = 'RECEIVE_MENTIONS'
function receiveMentions(json) {
  return {
    type: RECEIVE_MENTIONS,
    mentions: json.mentions,
    receivedAt: Date.now()
  }
}

function fetchMentions(user){
    return dispatch => {
        dispatch(requestMentions())
        return get(`https://api.mention.net/api/accounts/${user.account_id}/alerts/${user.alert_id}/mentions`)
          .then(json => dispatch(receiveMentions(subreddit, json)))
      }
}

function shouldFetchMentions(state) {
  const {isFetching} = state;
  if (isFetching) {
    return false
  } else {
    return true
  }
}

export function fetchMentionsIfNeeded() {
  return (dispatch, getState) => {
    const state = getState();
    if (shouldFetchMentions(state)) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchMentions(state.user))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}
