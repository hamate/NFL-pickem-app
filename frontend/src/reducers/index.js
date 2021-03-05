import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  session: sessionReducer,
  user: userReducer,
});

export default rootReducer;
