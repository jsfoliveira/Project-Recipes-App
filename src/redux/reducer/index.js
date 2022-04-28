import { combineReducers } from 'redux';
import player from './player';
import questions from './questions';
import token from './token';

const reducer = combineReducers({
  player,
  token,
  questions,
});

export default reducer;
