import SystemValues, {
  SET_GLOBAL_ALERT_DIALOG
} from 'src/constants/SystemValues';
import GlobalAlertDialogsJSON from 'src/constants/strings/global-alert-dialogs.json';

const systemValues = SystemValues.getInstance();

export const OpenGlobalAlertDialog = ( dialog: string ): any => {
  const j: any = { ...GlobalAlertDialogsJSON };
  const newState = {
    active: true,
    success: j[systemValues.language][dialog].success,
    title: j[systemValues.language][dialog].title,
    message: j[systemValues.language][dialog].message
  };
  return {
    type: SET_GLOBAL_ALERT_DIALOG,
    data: newState
  };
};

export const CloseGlobalAlertDialog = (): any => {
  const newState = {
    active: false
  };
  return {
    type: SET_GLOBAL_ALERT_DIALOG,
    data: newState
  };
};
