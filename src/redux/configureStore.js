import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./modules/index";
import {composeWithDevTools} from "redux-devtools-extension";
import {autoRehydrate} from "redux-persist";
import apiClientMiddleware from "./middleware/apiClientMiddleware";

export default function configureStore(reducers, initialState) {
    const {logger} = require('redux-logger');
    let generalMiddleware = [
        logger,
        apiClientMiddleware,
    ];
    const composedMiddleware = [applyMiddleware(...generalMiddleware)],
        createStoreWithMiddleware = compose(...composedMiddleware),
        store = createStore(
            rootReducer,
            initialState,
            composeWithDevTools(createStoreWithMiddleware)
        );
    return store;
}
