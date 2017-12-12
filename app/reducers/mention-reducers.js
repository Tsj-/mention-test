import { RECEIVE_MENTIONS, REQUEST_MENTIONS } from "../actions/mention-actions";

export function mentions(state = {list:[], isFetching:false}, action) {
    switch (action.type) {
        case REQUEST_MENTIONS:
            return { ...state, isFetching: true };
        case RECEIVE_MENTIONS:
            return { ...state, list:[...action.mentions], isFetching: false };
        default:
            return state;
    }
}