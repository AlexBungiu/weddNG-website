import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'

const logger = createLogger({
    // ...options
});

const store = createStore(
    reducer,
    applyMiddleware(logger)
);