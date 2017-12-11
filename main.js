import {get} from "./app/server";
import {account_id, alert_id} from "./app/config/env";
import { createStore } from 'redux';
import { rootReducer } from "./app/reducers";
import {initializeUser} from "./app/actions/user-actions";

/* start coding here*/
console.log('Mention is starting...');
let store = createStore(rootReducer);
store.dispatch(initializeUser({account_id:account_id,alert_id:alert_id}));

console.log(store.getState());
