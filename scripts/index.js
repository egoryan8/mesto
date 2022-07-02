import initialCards from './InitialCards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

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
  submitBtnSelector: '.form__save-btn',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_visible',
  inactiveBtnClass: 'form__save-btn_disabled',
};

//Open and close popup

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscToClosePopup);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscToClosePopup);
};

//Close popup by escape

const handleEscToClosePopup = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

//Close popup when clicked on overlay or CloseBtn

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

//Open a card

const handleClickToOpenCard = (link, name) => {
  openedImage.src = link;
  openedImage.alt = name;
  openedImageCaption.textContent = name;
  openPopup(popupOpenCard);
};

//Create and add card

const createCard = (cardData) => {
  const card = new Card(cardData, '#card-template', handleClickToOpenCard);

  const cardElement = card.generateCard();

  return cardElement;
};

const addCard = (list, card) => {
  list.prepend(card);
};

//Create and add initialCards

initialCards.forEach((element) => {
  const cardItem = createCard(element);
  addCard(cardsList, cardItem);
});

//Add a card popup

const handleFormAddPlaceSubmit = (evt) => {
  evt.preventDefault();
  const cardData = {
    name: placeInputName.value,
    link: placeInputLink.value,
  };
  const cardElement = createCard(cardData);
  addCard(cardsList, cardElement);
  closePopup(popupAddPlace);
};

//LISTENERS

popupEditOpenBtn.addEventListener('click', () => {
  profileInputName.value = profileName.textContent;
  profileInputStatus.value = profileStatus.textContent;
  editFormValidation.resetValidation();
  openPopup(popupEdit);
});

popupAddOpenBtn.addEventListener('click', () => {
  formAddPlace.reset();
  addFormValidation.resetValidation();
  openPopup(popupAddPlace);
});

formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);

formAddPlace.addEventListener('submit', handleFormAddPlaceSubmit);

popupsList.forEach((popupEl) => popupEl.addEventListener('mousedown', handleClickToOverlayOrBtn));

const editFormValidation = new FormValidator(formEditProfile, config);
editFormValidation.enableValidation();
const addFormValidation = new FormValidator(formAddPlace, config);
addFormValidation.enableValidation();
