import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import rootReducer from './reducers';

export function configureStore(initialState = {}) {
  const enhancers = [applyMiddleware(thunk, promiseMiddleware())];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          name: 'ReactBoilerplate',
        })
      : compose;

  const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers));

  return store;
}

const store = configureStore();
export default store;
