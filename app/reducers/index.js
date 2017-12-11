import { combineReducers } from 'redux';
import { user } from "./user-reducers";
import { mentions } from "./mention-reducers";

export const rootReducer = combineReducers({user,mentions});