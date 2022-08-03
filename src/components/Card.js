export default class Card {
  constructor(
    cardData,
    cardSelector,
    handleClickToOpenCard,
    handleDeleteCard,
    handleLike,
    handleRemoveLike
  ) {
    this._cardTitle = cardData.name;
    this._cardImage = cardData.link;
    this._likes = cardData.likes;
    this._cardId = cardData.cardId;
    this._userId = cardData.userId;
    this._ownerId = cardData.ownerId;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeAdd = handleLike;
    this._handleRemoveLike = handleRemoveLike;
    this._cardSelector = cardSelector;
    this._handleClickToOpenCard = handleClickToOpenCard;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._imageElement = this._element.querySelector(".card__image");
    this._titleElement = this._element.querySelector(".card__title");
    this._likeButton = this._element.querySelector(".card__like-btn");
    this._deleteButton = this._element.querySelector(".card__delete-btn");
    this._likesCount = this._element.querySelector(".card__likes-count");

    this._imageElement.src = this._cardImage;
    this._imageElement.alt = this._cardTitle;
    this._titleElement.textContent = this._cardTitle;
    this._likesCount.textContent = `${this._likes.length}`;

    this._setEventListeners();
    this._handleLikeState();
    this.handleDeleteButtonState();

    return this._element;
  }

  _setEventListeners() {
    this._imageElement.addEventListener("click", () => {
      this._handleClickToOpenCard(this._cardTitle, this._cardImage);
    });

    this._likeButton.addEventListener("click", () => {
      this._likeButton.classList.contains("card__like-btn_active")
        ? this._handleRemoveLike()
        : this._handleLikeAdd();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });
  }

  handleDeleteButtonState() {
    if (this._userId !== this._ownerId) {
      this._deleteButton.remove();
      this._deleteButton = null;
    }
  }

  _handleLikeState() {
    this._likes.forEach((user) => {
      if (user._id === this._userId) {
        this.addLike();
      } else {
        this.removeLike();
      }
    });
  }

  addLike() {
    this._likeButton.classList.add("card__like-btn_active");
  }

  removeLike() {
    this._likeButton.classList.remove("card__like-btn_active");
  }

  setLikesCount(res) {
    this._likesCount.textContent = `${res.likes.length}`;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }
}
