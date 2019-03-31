import { combineReducers } from 'redux';
import setHeight from './SetHeight';
import oAuth from './oAuth';
import update from './update';

export default combineReducers({
  oAuth,
  setHeight,
  update
});
