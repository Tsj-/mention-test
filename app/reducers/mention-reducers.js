import { RECEIVE_MENTIONS, REQUEST_MENTIONS } from "../actions/mention-actions";

export function mentions(state = {}, action) {
    switch (action.type) {
        case REQUEST_MENTIONS:
            return { ...state, isFetching: true };
        case RECEIVE_MENTIONS:
            return { ...state, ...action.mentions, isFetching: false };
        default:
            return state;
    }
}