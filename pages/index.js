import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import {
  initialCards,
  config,
  popupEdit,
  popupEditOpenBtn,
  profileName,
  profileStatus,
  profileInputName,
  profileInputStatus,
  formEditProfile,
  formAddPlace,
  popupAddPlace,
  popupAddOpenBtn,
  cardsList,
  placeInputName,
  placeInputLink,
  popupOpenCard,
  openedImage,
  openedImageCaption,
  popupsList,
  formValidators,
} from '../utils/constants.js';

const initialCards = new Section({
  initialCards,
  renderer: () => {},
});

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

// Enable Validation

const activateValidation = () => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

//LISTENERS

popupEditOpenBtn.addEventListener('click', () => {
  profileInputName.value = profileName.textContent;
  profileInputStatus.value = profileStatus.textContent;
  formValidators['edit-profile-form'].resetValidation();
  openPopup(popupEdit);
});

popupAddOpenBtn.addEventListener('click', () => {
  formAddPlace.reset();
  formValidators['add-place-form'].resetValidation();
  openPopup(popupAddPlace);
});

formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);

formAddPlace.addEventListener('submit', handleFormAddPlaceSubmit);

popupsList.forEach((popupEl) => popupEl.addEventListener('mousedown', handleClickToOverlayOrBtn));

activateValidation();
