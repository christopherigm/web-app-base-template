import {
  combineReducers
} from 'redux';
import SystemReducer from './system-reducer';
import UserReducer from './user-reducer';

const reducers = {
  system: SystemReducer,
  user: UserReducer
};

export default combineReducers(reducers);
