import React from 'react';
import { render } from "react-dom";
import { account_id, alert_id } from "./config/env";
import { createStore, Provider } from 'redux';
import { rootReducer } from "./reducers";
import { initializeUser } from "./actions/user-actions";

/* start coding here*/
console.log('Mention is starting...');
let store = createStore(rootReducer);
store.dispatch(initializeUser({ account_id: account_id, alert_id: alert_id }));

console.log(store.getState());

render(
    <div>
        lala
        </div>,
    document.getElementById('container')
);
