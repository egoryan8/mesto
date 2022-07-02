export default class Card {
  constructor(cardData, cardSelector, handleClickToOpenCard) {
    this._cardTitle = cardData.name;
    this._cardImage = cardData.link;
    this._cardSelector = cardSelector;
    this._handleClickToOpenCard = handleClickToOpenCard;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._imgElement = this._element.querySelector('.card__image');
    this._titleElement = this._element.querySelector('.card__title');

    this._imgElement.src = this._cardImage;
    this._imgElement.alt = this._cardTitle;
    this._titleElement.textContent = this._cardTitle;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._likeBtn = this._element.querySelector('.card__like-btn');
    this._deleteBtn = this._element.querySelector('.card__delete-btn');

    this._imgElement.addEventListener('click', () => {
      this._handleClickToOpenCard(this._cardImage, this._cardTitle);
    });

    this._likeBtn.addEventListener('click', () => {
      this._likeCard();
    });

    this._deleteBtn.addEventListener('click', () => {
      this._deleteCard();
    });
  }

  _likeCard() {
    this._likeBtn.classList.toggle('card__like-btn_active');
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }
}
