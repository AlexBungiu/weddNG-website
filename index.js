import React from 'react';
import ReactDOM from 'react-dom';
// main app
import App from './src/containers/App';
import configureStore from "./src/redux/configureStore";
import {Provider} from "react-redux";

const store = configureStore();

const target = document.getElementById('app');

const render = Component =>
    ReactDOM.render(
        <Provider store={store}>
            {Component}
        </Provider>,
        target
    );

render(<App/>);