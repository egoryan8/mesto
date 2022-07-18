export default class UserInfo {
  constructor({ nameSelector, statusSelector }) {
    this._name = document.querySelector(nameSelector);
    this._status = document.querySelector(statusSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      status: this._status.textContent,
    };
    return userInfo;
  }

  setUserInfo(userInfo) {
    this._name.textContent = userInfo.name;
    this._status.textContent = userInfo.status;
  }
}
