import RegisterUser from './_api-core-helpers/register-user';
import Login from './_api-core-helpers/login';
import ActivateUserCall from './_api-core-helpers/activate-user';
import GetSystemConfigurations from './_api-core-helpers/get-system-configuration';
import GetChangeLog from './_api-core-helpers/get-changelog';

const APISDK = {
  RegisterUser: RegisterUser,
  Login: Login,
  ActivateUserCall: ActivateUserCall,
  GetSystemConfigurations: GetSystemConfigurations,
  GetChangeLog: GetChangeLog
};

export default APISDK;
