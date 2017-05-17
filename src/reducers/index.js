import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import book from './book';

export default combineReducers({
  user,
  runtime,
  book,
});
