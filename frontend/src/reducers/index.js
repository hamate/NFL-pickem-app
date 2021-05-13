import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';
import leagueReducer from './leagueReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  session: sessionReducer,
  user: userReducer,
  league: leagueReducer,
});

export default rootReducer;
