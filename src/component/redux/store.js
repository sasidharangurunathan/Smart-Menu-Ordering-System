import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import RootReducer from './rootReducer';
// import rootSaga from '../redux/saga/index'
//import createSagaMiddleware from 'redux-saga'
import { createLogger, LoggerPredicate } from 'redux-logger'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import Reactotron from "../../ReactronConfig"
import process from 'process';
const history = createBrowserHistory()

const routeMiddleware = routerMiddleware(history)
const initialState = {}

const logger = createLogger({
    // ...options
    predicate: LoggerPredicate,
})
let devtools = (x) => x
//const sagaMiddleware = createSagaMiddleware({ context: history })
const middlewares = [
    logger,
 
    thunk,
    routeMiddleware,
]
if (
    process &&
    process.env.NODE_ENV !== 'production' &&
    process.browser &&
    window.__REDUX_DEVTOOLS_EXTENSION__
) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

export const store = createStore(
    RootReducer,
    initialState,
    compose(
        applyMiddleware(...middlewares),
        devtools,
        Reactotron.createEnhancer()
    )
)
// sagaMiddleware.run(rootSaga)
export { history }



// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import { composeWithDevTools } from 'redux-devtools-extension';

// import logger from 'redux-logger';
// import rootReducer from './rootReducer';

// //hold reducer
// const store = createStore(
//     rootReducer, 
//     composeWithDevTools(applyMiddleware(logger, thunk)))

// export default store

/*
import React from "react";
import ReactDOM from "react-dom";
// import { styled } from "@mui/styles"
import '../index.css';
import App from '../App';
// import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";
import rootReducer from './rootReducer';
import { initialState } from "react-use-cart";
import {routeMiddleware} from 'connected-react-router'
// import CryptoJS from 'crypto-js';

// const key = CryptoJS.enc.Utf8.parse("someRandomText_encryptionPhase");
// const iv = CryptoJS.enc.Utf8.parse("someRandomIV");




const persistedState = loadFromSessionStorage();

let store = createStore(rootReducer, persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    export const Store= createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middlewares),
        devtools)
    )
function loadFromSessionStorage() {
    try {
        const serializedState = sessionStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        // const decrypted = CryptoJS.AES.decrypt(serializedState, key, {iv: iv}).toString(CryptoJS.enc.Utf8);
        // return JSON.parse(decrypted);
    } catch {
        return undefined;
    }
}

function saveToSessionStorage(state) {
        try {
            const serializedState = JSON.stringify(state);
            // const encrypted = CryptoJS.AES.encrypt(serializedState, key, {iv: iv});
            // sessionStorage.setItem('state', encrypted)
        } catch (e) {
            console.log(e)
        }
}

ReactDOM.render(
    <BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>,
    document.getElementById('root')
);

store.subscribe(() => saveToSessionStorage(store.getState()));

// serviceWorker.unregister();

export default store;
*/