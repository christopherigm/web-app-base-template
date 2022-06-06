import {
  SYSTEM_DATA
} from 'src/constants/SystemValues';

const initialState: any = {
  darkMode: false,
  platform: {
    os: 'web',
    prefix: ''
  },
  configurations: null,
  globalAlert: {
    active: false
  }
};

const SystemReducer = (state = initialState, action: any): any => {
  switch ( action.type ) {
    case SYSTEM_DATA:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default SystemReducer;
