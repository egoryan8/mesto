import initialCards from './InitialCards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

import {} from '../utils/variables.js';
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
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-btn')) {
    closePopup(evt.currentTarget);
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
