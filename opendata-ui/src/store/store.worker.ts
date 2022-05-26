import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from "./root-reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import {exposeStore} from "redux-in-worker";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

// exposeStore(store)

export default store