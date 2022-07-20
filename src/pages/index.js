import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import './index.css';

import {
  initialCards,
  config,
  popupEdit,
  popupEditOpenBtn,
  profileName,
  profileStatus,
  profileInputName,
  profileInputStatus,
  formAddPlace,
  popupAddPlace,
  popupAddOpenBtn,
  cardsContainer,
  popupOpenCard,
  formValidators,
} from '../utils/constants.js';

//Cards

const handleClickToOpenCard = (title, src) => {
  popupImage.open(title, src);
};

const createCard = (cardData) => {
  const card = new Card(cardData, '#card-template', handleClickToOpenCard);

  const cardElement = card.generateCard();

  return cardElement;
};

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      cardsSection.addItem(createCard(cardData));
    },
  },
  cardsContainer,
);

cardsSection.renderItems();

const handleFormAddPlaceSubmit = (cardData) => cardsSection.addItem(createCard(cardData));

const popupNewPlace = new PopupWithForm(popupAddPlace, handleFormAddPlaceSubmit);
popupNewPlace.setEventListeners();

const popupImage = new PopupWithImage(popupOpenCard);
popupImage.setEventListeners();

//Profile

const profileInfo = new UserInfo({
  profileName: profileName,
  profileStatus: profileStatus,
});

const handleFormProfileSubmit = (userInfo) => {
  profileInfo.setUserInfo(userInfo);
};

const popupProfile = new PopupWithForm(popupEdit, handleFormProfileSubmit);
popupProfile.setEventListeners();

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
  popupProfile.open();
});

popupAddOpenBtn.addEventListener('click', () => {
  formAddPlace.reset();
  formValidators['add-place-form'].resetValidation();
  popupNewPlace.open();
});

activateValidation();
