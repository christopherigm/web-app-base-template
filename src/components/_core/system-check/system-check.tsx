import React, {
  useEffect
} from 'react';
import {
  useNavigate,
  useLocation
} from 'react-router-dom';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import SystemValues from 'src/constants/SystemValues';
import { FILE_PREFIX } from 'src/constants/SystemValues';
import SetSystemData from 'src/redux/actions/system';
import * as M from 'materialize-css';

const env = SystemValues.getInstance();
const isMobileApp = env.isMobileApp;

const SystemCheck = (): React.ReactElement => {
  const login = useSelector((state: any) => state.login);
  const dispatch = useDispatch();
  const navigate: any = useNavigate();
  const location: any = useLocation();

  const redirect = () => {
    if ( location.path === 'login' ) {
      if ( login.id ) {
        navigate('/');
      }
    }
  };

  useEffect(() => {
    const w: any = window;
    M.AutoInit();
    w.scrollTo(0, 0);
    if ( isMobileApp ) {
      w.document.addEventListener('deviceready', () => {
        if ( w.device ) {
          const os: string = w.device.platform;
          let prefix = '';
          if ( os === 'Android' ) {
            prefix = FILE_PREFIX.ANDROID;
          }
          dispatch(SetSystemData({
            platform: {
              os: os,
              prefix: prefix
            }
          }));
        }
      });
    } else {
      redirect();
    }
  }, [M, window]);

  return (
    <></>
  );
};

export default SystemCheck;
