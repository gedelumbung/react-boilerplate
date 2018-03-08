import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import login from './reducer/login';
import users from './reducer/users';

const rootReducer = combineReducers({
  login,
  routing: routerReducer,
  users
});

export default rootReducer;
