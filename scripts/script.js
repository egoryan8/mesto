const popupEdit = document.querySelector('.popup_edit-profile');
const popupEditOpenBtn = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const profileInputName = document.querySelector('#profile-name');
const profileInputStatus = document.querySelector('#profile-status');
const formEditProfile = document.querySelector('.form_edit-profile');
const formAddPlace = document.querySelector('.form_add-place');
const popupAddPlace = document.querySelector('.popup_add-place');
const popupAddOpenBtn = document.querySelector('.profile__add-btn');
const cardsList = document.querySelector('.places__cards-list');
const placeInputName = document.querySelector('#place-name');
const placeInputLink = document.querySelector('#place-link');
const popupOpenCard = document.querySelector('.popup_open-card');
const openedImage = document.querySelector('.popup__image');
const openedImageCaption = document.querySelector('.popup__image-caption');
const popupsList = document.querySelectorAll('.popup');
const config = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__save-btn',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_visible',
  inactiveButtonClass: 'form__save-btn_disabled',
};

//Close popup when clicked escape

const handleEscToClosePopup = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

//Open and close popup

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscToClosePopup);
  //Проверяю валидны ли формы при открытии попапа и если нет, то кнопка будет не активной
  setEventListeners(popup, config);
};

const closePopup = (popup) => {
  const inputList = Array.from(popup.querySelectorAll(config.inputSelector));

  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscToClosePopup);
  //Скрываю ошибки перед повторным открытием
  inputList.forEach((inputElement) => {
    hideInputError(popup, inputElement, config);
  });
};

//Close popup when clicked on overlay or button

const handleClickToOverlayOrBtn = function (evt) {
  if (evt.target === this || evt.target.classList.contains('popup__close-btn')) {
    closePopup(this);
  }
};

//Edit Profile popup

const handleFormEditProfileSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileStatus.textContent = profileInputStatus.value;
  closePopup(popupEdit);
};

//Initial fill cards

const handleLikeButton = (event) => event.target.classList.toggle('card__like-btn_active');
const deleteCard = (event) => event.target.closest('.card').remove();

const createCard = (link, name) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  card.querySelector('.card__like-btn').addEventListener('click', handleLikeButton);
  card.querySelector('.card__delete-btn').addEventListener('click', deleteCard);
  cardImage.addEventListener('click', () => handleClickToOpenCard(link, name));

  return card;
};

const addCard = (list, link, name) => {
  const card = createCard(link, name);
  list.prepend(card);
};

initialCards.forEach((element) => {
  addCard(cardsList, element.link, element.name);
});

//Add a card popup

const handleFormAddPlaceSubmit = (evt) => {
  evt.preventDefault();
  addCard(cardsList, placeInputLink.value, placeInputName.value);
  formAddPlace.reset();
  closePopup(popupAddPlace);
};

//Open a card popup

const handleClickToOpenCard = (link, name) => {
  openedImage.src = link;
  openedImage.alt = name;
  openedImageCaption.textContent = name;
  openPopup(popupOpenCard);
};

//LISTENERS

popupEditOpenBtn.addEventListener('click', () => {
  profileInputName.value = profileName.textContent;
  profileInputStatus.value = profileStatus.textContent;
  openPopup(popupEdit);
});

popupAddOpenBtn.addEventListener('click', () => openPopup(popupAddPlace));

formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);

formAddPlace.addEventListener('submit', handleFormAddPlaceSubmit);

popupsList.forEach((popupEl) => popupEl.addEventListener('mousedown', handleClickToOverlayOrBtn));
