import axios from 'axios';
import SystemValues from 'src/constants/SystemValues';
import store from 'src/redux/store';

const systemValues = SystemValues.getInstance();
const instance = axios.create({
  headers: {
    'Content-Type': 'application/vnd.api+json'
  }
});

export const APIGet = ( endpoint: string, includeBaseURL = true ): Promise<any> => {
  const url = `${systemValues.apiBaseUrl}${endpoint}`;
  const jwt = store && store.getState().user &&
    store.getState().user.jwt &&
    store.getState().user.jwt.access ?
    store.getState().user.jwt.access : null;
  return new Promise((res, rej) => {
    instance.get(includeBaseURL ? url : endpoint, {
      headers: {
        'Authorization': jwt ? `Bearer ${jwt}` : ''
      }
    })
      .then((response) => {
        return res(response.data);
      })
      .catch((error) => {
        console.log(
          '\n====== APIGet Error ======',
          '\nURL:', url,
          '\nJWT:', jwt,
          '\nError', JSON.stringify(error)
        );
        return rej(error);
      });
  });
};

export const APIPost = ( endpoint: string, data: any, includeBaseURL = true ): Promise<any> => {
  const url = `${systemValues.apiBaseUrl}${endpoint}`;
  const jwt = store && store.getState().user &&
    store.getState().user.jwt &&
    store.getState().user.jwt.access ?
    store.getState().user.jwt.access : null;
  return new Promise((res, rej) => {
    instance.post(includeBaseURL ? url : endpoint, data, {
      headers: {
        'Authorization': jwt ? `Bearer ${jwt}` : ''
      }
    })
      .then((response) => {
        return res(response.data);
      })
      .catch((error) => {
        console.log(
          '\n====== APIPost Error ======',
          '\nData sent:', data,
          '\nURL:', url,
          '\nJWT:', jwt,
          '\nstore', store.getState().user,
          '\nError', JSON.stringify(error)
        );
        return rej(error);
      });
  });
};

export const APIPatch = ( endpoint: string, data: any, includeBaseURL = true ): Promise<any> => {
  const url = `${systemValues.apiBaseUrl}${endpoint}`;
  const jwt = store && store.getState().user &&
    store.getState().user.jwt &&
    store.getState().user.jwt.access ?
    store.getState().user.jwt.access : null;
  return new Promise((res, rej) => {
    instance.patch(includeBaseURL ? url : endpoint, data, {
      headers: {
        'Authorization': jwt ? `Bearer ${jwt}` : ''
      }
    })
      .then((response) => {
        return res(response.data);
      })
      .catch((error) => {
        console.log(
          '\n====== APIPatch Error ======',
          '\nData sent:', data,
          '\nURL:', url,
          '\nJWT:', jwt,
          '\nError', JSON.stringify(error)
        );
        return rej(error);
      });
  });
};

export const APIDelete = ( endpoint: string, includeBaseURL = true ): Promise<any> => {
  const url = `${systemValues.apiBaseUrl}${endpoint}`;
  const jwt = store && store.getState().user &&
    store.getState().user.jwt &&
    store.getState().user.jwt.access ?
    store.getState().user.jwt.access : null;
  return new Promise((res, rej) => {
    instance.delete(includeBaseURL ? url : endpoint, {
      headers: {
        'Authorization': jwt ? `Bearer ${jwt}` : ''
      }
    })
      .then((response) => {
        return res(response.data);
      })
      .catch((error) => {
        console.log(
          '\n====== APIDelete Error ======',
          '\nURL:', url,
          '\nJWT:', jwt,
          '\nError', JSON.stringify(error)
        );
        return rej(error);
      });
  });
};
