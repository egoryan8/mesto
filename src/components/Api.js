export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    this._cards = fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
    return this._cards;
  }

  getProfile() {
    this._profileInfo = fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
    return this._profileInfo;
  }

  setProfile(obj) {
    this._changedProfile = fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: obj.name,
        about: obj.about,
      }),
    }).then(this._handleResponse);
    return this._changedProfile;
  }

  setLike(obj) {
    this._like = fetch(`${this._url}/cards/${obj._id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleResponse);
    return this._like;
  }

  deleteLike(obj) {
    this._deleteLike = fetch(`${this._url}/cards/${obj._id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
    return this._deleteLike;
  }

  addCard(obj) {
    this._addedCard = fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: obj.title,
        link: obj.link,
      }),
    }).then(this._handleResponse);
    return this._addedCard;
  }

  deleteCard(obj) {
    this._deletedCard = fetch(`${this._url}/cards/${obj._id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
    return this._deletedCard;
  }

  setAvatar(obj) {
    this._newAvatar = fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: obj.avatar,
      }),
    }).then(this._handleResponse);
    return this._newAvatar;
  }
}
