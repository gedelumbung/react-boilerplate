import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import login from './reducer/login';
import menu from './reducer/menu';
import users from './reducer/users';

const rootReducer = combineReducers({
  login,
  menu,
  routing: routerReducer,
  users
});

export default rootReducer;
