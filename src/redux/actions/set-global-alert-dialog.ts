import SystemValues, {
  SYSTEM_DATA
} from 'src/constants/SystemValues';
import GlobalAlertDialogsJSON from 'src/constants/strings/global-alert-dialogs.json';

const systemValues = SystemValues.getInstance();

export const OpenGlobalAlertDialog = ( dialog: string, title?: string, message?: string ): any => {
  const j: any = { ...GlobalAlertDialogsJSON };
  const newState = {
    globalAlert: {
      active: true,
      success: j[systemValues.language][dialog].success,
      title: title ? title : j[systemValues.language][dialog].title,
      message: message ? message : j[systemValues.language][dialog].message
    }
  };
  return {
    type: SYSTEM_DATA,
    data: newState
  };
};

export const CloseGlobalAlertDialog = (): any => {
  const newState = {
    globalAlert: {
      active: false
    }
  };
  return {
    type: SYSTEM_DATA,
    data: newState
  };
};
