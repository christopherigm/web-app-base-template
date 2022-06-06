/* eslint-disable max-lines-per-function */
import {
  USER
} from 'src/constants/SystemValues';

const initialState: any = {};

const UserReducer = (state = initialState, action: any): any => {
  switch ( action.type ) {
    case USER:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default UserReducer;
