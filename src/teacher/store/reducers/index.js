import { combineReducers } from 'redux';
import authReducers from './authReducer';
import commonReducers from './commonReducer';

export default combineReducers({
  authReducers: authReducers,
  commonReducers: commonReducers,
});
