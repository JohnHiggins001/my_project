import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer'

const logger = store => next => action => {
    if (typeof action === 'function') {
        console.log('diapatching a function')
    } else {
        console.log('dispatching', action);
    }
    const result = next(action)
    console.log('newState', store.getState())
    return result;
}

const middleWares = [
    thunk,
    logger,
];

export default createStore(reducers, applyMiddleware(...middleWares));