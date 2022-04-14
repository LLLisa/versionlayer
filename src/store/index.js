import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

const rootReducer = () => {};

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
