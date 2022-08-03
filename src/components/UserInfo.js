export default class UserInfo {
  constructor({ profileName, profileStatus, profileAvatar }) {
    this._name = profileName;
    this._status = profileStatus;
    this._avatar = profileAvatar;
  }

  getUserInfo() {
    this._userInfo = {
      name: this._name.textContent,
      about: this._status.textContent,
      avatar: this._avatar.src,
    };
    return this._userInfo;
  }

  setUserInfo(userInfo) {
    if (userInfo.name && userInfo.about && userInfo.avatar) {
      this._name.textContent = userInfo.name;
      this._status.textContent = userInfo.about;
      this._avatar.src = userInfo.avatar;
    }
  }
}
