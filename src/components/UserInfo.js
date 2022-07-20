export default class UserInfo {
  constructor({ profileName, profileStatus }) {
    this._name = profileName;
    this._status = profileStatus;
  }

  getUserInfo() {
    const userInfo = {
      profileName: this._name.textContent,
      profileStatus: this._status.textContent,
    };
    return userInfo;
  }

  setUserInfo(userInfo) {
    this._name.textContent = userInfo.profileName;
    this._status.textContent = userInfo.profileStatus;
  }
}
