import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import thunkMiddleware from 'redux-thunk';

import {
  appReducer
} from './reducer';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunkMiddleware];


const store = createStore(
  appReducer, {
    formReducer: {
      formData: []
    }
  },

  storeEnhancers(applyMiddleware(...middlewares))
);

export default store;