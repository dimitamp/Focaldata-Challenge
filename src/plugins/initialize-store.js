import {compose, createStore} from 'redux';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const create = (reducer, initialState) => {
    const store = createStore(reducer, initialState, composeEnhancers());
    return store
};

const store = create(rootReducer,{});

const initializeStore = next => configuration => next({...configuration, store});

export {store};
export default initializeStore;
