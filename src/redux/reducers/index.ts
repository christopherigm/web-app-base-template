import {
  combineReducers
} from 'redux';
import SystemReducer from './system';
import UserReducer from './user';

const reducers = {
  system: SystemReducer,
  user: UserReducer
};

export default combineReducers(reducers);
