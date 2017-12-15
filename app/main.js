import React from 'react';
import { render } from "react-dom";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { account_id, alert_id } from "./config/env";
import { createStore, applyMiddleware  } from 'redux';
import { rootReducer } from "./reducers";
import { initializeUser } from "./actions/user-actions";
import { Feed } from "./components/feed/container";
import { Provider } from 'react-redux'

/* start coding here*/
console.log('Mention is starting...');
const loggerMiddleware = createLogger();

let store = createStore(rootReducer,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    ));
store.dispatch(initializeUser({ account_id: account_id, alert_id: alert_id }));

console.log(store.getState());

render(
    <Provider store={store}>
    <div data-component="layout">
        <h1>List mentions here</h1>
        <Feed />
    </div>
    </Provider>,
    document.getElementById('container')
);

import "./styles/common.scss";
