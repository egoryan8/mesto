export const popupEdit = document.querySelector('.popup_edit-profile');
export const popupEditOpenBtn = document.querySelector('.profile__edit-btn');
export const profileName = document.querySelector('.profile__name');
export const profileStatus = document.querySelector('.profile__status');
export const profileInputName = document.querySelector('#profile-name');
export const profileInputStatus = document.querySelector('#profile-status');
export const formEditProfile = document.querySelector('.form_edit-profile');
export const formAddPlace = document.querySelector('.form_add-place');
export const popupAddPlace = document.querySelector('.popup_add-place');
export const popupAddOpenBtn = document.querySelector('.profile__add-btn');
export const cardsList = document.querySelector('.places__cards-list');
export const placeInputName = document.querySelector('#place-name');
export const placeInputLink = document.querySelector('#place-link');
export const popupOpenCard = document.querySelector('.popup_open-card');
export const openedImage = document.querySelector('.popup__image');
export const openedImageCaption = document.querySelector('.popup__image-caption');
export const popupsList = document.querySelectorAll('.popup');
export const formValidators = {};

export const config = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitBtnSelector: '.form__save-btn',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_visible',
  inactiveBtnClass: 'form__save-btn_disabled',
};

export const initialCards = [
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Республика Алтай',
    link: 'https://images.unsplash.com/photo-1582086670462-bd0b47819245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
];
