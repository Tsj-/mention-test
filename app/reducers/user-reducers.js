import { INITIALIZE_USER } from "../actions/user-actions";

export function user(state = {}, action) {
    switch (action.type) {
        case INITIALIZE_USER:
            return { ...state, ...action.user}
        default:
            return state
    }
}