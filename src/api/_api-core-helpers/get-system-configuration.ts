import { APIGet } from 'src/api/communicator';
import store from 'src/redux/store';
import SetSystemData from 'src/redux/actions/system';

const GetSystemConfigurations = (): Promise<any> => {
  return new Promise((res, rej) => {
    APIGet('system/?fields[System]=site_name,img_logo', true)
      .then((response: any) => {
        store.dispatch(SetSystemData({
          configurations: response.data
        }));
        res(response.data);
      })
      .catch((error: any) => {
        rej(error);
      });
  });
};

export default GetSystemConfigurations;
