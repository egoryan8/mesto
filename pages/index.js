import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
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

const handleClickToOpenCard = (title, src) => {
  popupImage.open(title, src);
};

const createCard = (cardData) => {
  const card = new Card(cardData, '#card-template', handleClickToOpenCard);

  const cardElement = card.generateCard();

  return cardElement;
};

const initialFillCards = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const cardElement = createCard(cardData);
      initialFillCards.addItem(cardElement);
    },
  },
  cardsList,
);

initialFillCards.renderItems();

//Create and add initialCards

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

const profileInfo = new UserInfo({
  profileName: profileName,
  profileStatus: profileStatus,
});

const handleFormProfileSubmit = (userInfo) => {
  profileInfo.setUserInfo(userInfo);
};

const popupProfile = new PopupWithForm(popupEdit, handleFormProfileSubmit);
popupProfile.setEventListeners();

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
  openPopup(popupAddPlace);
});

// formEditProfile.addEventListener('submit', handleFormProfileSubmit);

// formAddPlace.addEventListener('submit', handleFormAddPlaceSubmit);

// popupsList.forEach((popupEl) => popupEl.addEventListener('mousedown', handleClickToOverlayOrBtn));

activateValidation();
