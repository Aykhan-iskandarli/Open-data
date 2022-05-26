import React, {useEffect} from 'react';
import 'reflect-metadata';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css'
import {LayoutRoutes} from './router/router';
import {DbService} from './assets/db/db.service';
import store from "./store/store.worker";
import {Provider} from "react-redux";
import {wrapStore} from "redux-in-worker";

// const worker = new Worker(new URL('./store/store.worker', import.meta.url));
// console.log(require('url'))
// const workerStore = wrapStore(worker, store.getState());

function App() {
    useEffect(() => {
        // tslint:disable-next-line: no-unused-expression
        new DbService();
    }, [])

    return (
        <Provider store={store}>
            <Router>
                <LayoutRoutes/>
            </Router>
        </Provider>
    );
}

export default App;
