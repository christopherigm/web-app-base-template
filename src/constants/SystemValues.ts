import packageJSON from './version.json';
import * as c from './Constants';
// import store from 'src/redux/store';

export const FILE_PREFIX = {
  ANDROID: 'file:///android_asset/www'
};
export const USER = 'USER';
export const SET_MOBILE_PLATOFORM = 'SET_MOBILE_PLATOFORM';
export const SET_GLOBAL_ALERT_DIALOG = 'SET_GLOBAL_ALERT_DIALOG';
export const SYSTEM_DATA = 'SYSTEM_DATA';

const {
  REACT_APP_API_URL,
  REACT_APP_IS_MOBILE_APP,
  REACT_APP_BRANCH_NAME,
  REACT_APP_FACEBOOK_APP_ID
} = process.env;

class SystemValues {
  static _instance: SystemValues;
  private _apiBaseUrl: string;
  private _isMobileApp: boolean;
  private _branchName: string;
  private _version: string;
  private _facebookAppID: string;
  private _language: string;
  private _primaryColorName: string;
  private _primaryColorValue: string;
  private _searchAvailable: boolean;
  private _appEnabled: boolean;
  private _changelogEnabled: boolean;

  constructor() {
    this._apiBaseUrl = REACT_APP_API_URL ? REACT_APP_API_URL : c.DEFAULT_API_URL;
    this._isMobileApp = REACT_APP_IS_MOBILE_APP ? true : false;
    this._branchName = REACT_APP_BRANCH_NAME ? REACT_APP_BRANCH_NAME : 'local-branch';
    this._version = packageJSON ? packageJSON.version : '0.0.0';
    this._facebookAppID = REACT_APP_FACEBOOK_APP_ID ? REACT_APP_FACEBOOK_APP_ID : '-';
    this._language = c.DEFAULT_LANGUAGE;
    this._searchAvailable = c.SEARCH_BOX_AVAILABLE;
    this._primaryColorName = c.PRIMARY_COLOR_NAME;
    this._primaryColorValue = c.PRIMARY_COLOR_VALUE;
    this._appEnabled = c.APP_ENABLED;
    this._changelogEnabled = c.CHANGELOG_ENABLED;
  }

  static getInstance(): SystemValues {
    if ( !SystemValues._instance ) {
      SystemValues._instance = new SystemValues();
    }
    // store.getState().user;
    return SystemValues._instance;
  }

  public get language(): string {
    return this._language;
  }

  public get apiBaseUrl(): string {
    return this._apiBaseUrl;
  }

  public get isMobileApp(): boolean {
    return this._isMobileApp;
  }

  public get branchName(): string {
    return this._branchName;
  }

  public get version(): string {
    return this._version;
  }

  public get primaryColorName(): string {
    return this._primaryColorName;
  }

  public get primaryColorValue(): string {
    return this._primaryColorValue;
  }

  public get facebookAppID(): string {
    return this._facebookAppID;
  }

  public get searchAvailable(): boolean {
    return this._searchAvailable;
  }

  public get appEnabled(): boolean {
    return this._appEnabled;
  }

  public get changelogEnabled(): boolean {
    return this._changelogEnabled;
  }
}

export default SystemValues;
