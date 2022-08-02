import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import "./index.css";

import {
  config,
  popupEdit,
  popupEditOpenButton,
  profileName,
  profileStatus,
  profileInputName,
  profileInputStatus,
  popupAddPlace,
  popupAddOpenButton,
  cardsContainer,
  popupOpenCard,
  formValidators,
  editAvatarOpenButton,
  popupEditAvatar,
  profileAvatar,
} from "../utils/constants.js";

//Cards
const server = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-47",
  headers: {
    authorization: "9cd7abe3-5559-4a23-a51d-befd5fe922ed",
    "Content-Type": "application/json",
  },
});

const handleClickToOpenCard = (title, src) => {
  popupImage.open(title, src);
};

const createCard = (cardData) => {
  const card = new Card(cardData, "#card-template", handleClickToOpenCard);

  const cardElement = card.generateCard();

  return cardElement;
};

const cardsSection = new Section(
  {
    renderer: (cardData) => {
      cardsSection.addItem(createCard(cardData));
    },
  },
  cardsContainer
);

const handleFormAddPlaceSubmit = (cardData) => {
  cardsSection.addItem(createCard(cardData));
  popupNewPlace.close();
};

const popupNewPlace = new PopupWithForm(
  popupAddPlace,
  handleFormAddPlaceSubmit
);
popupNewPlace.setEventListeners();

const popupImage = new PopupWithImage(popupOpenCard);
popupImage.setEventListeners();

//Profile

const profileInfo = new UserInfo({
  profileName: profileName,
  profileStatus: profileStatus,
  profileAvatar: profileAvatar,
});

const handleFormProfileSubmit = (userInfo) => {
  return server
    .setProfile(userInfo)
    .then((res) => {
      profileInfo.setUserInfo(res);
      popupProfile.close();
    })
    .catch((err) => console.log(err));
};

const popupProfile = new PopupWithForm(popupEdit, handleFormProfileSubmit);
popupProfile.setEventListeners();

const handleFormAvatarSubmit = (obj) => {
  return server
    .setAvatar(obj)
    .then((link) => {
      profileInfo.setUserInfo(link);
      popupAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    });
};

const popupAvatar = new PopupWithForm(popupEditAvatar, handleFormAvatarSubmit);
popupAvatar.setEventListeners();

// Enable Validation

const activateValidation = () => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

//LISTENERS

popupEditOpenButton.addEventListener("click", () => {
  const userInfo = profileInfo.getUserInfo();
  profileInputName.value = userInfo.name;
  profileInputStatus.value = userInfo.about;
  formValidators["edit-profile-form"].resetValidation();
  popupProfile.open();
});

popupAddOpenButton.addEventListener("click", () => {
  formValidators["add-place-form"].resetValidation();
  popupNewPlace.open();
});

editAvatarOpenButton.addEventListener("click", () => {
  popupAvatar.open();
});

activateValidation();

Promise.all([server.getCards(), server.getProfile()])
  .then((value) => {
    console.log(value);
    cardsSection.renderItems(value[0]);
    profileInfo.setUserInfo(value[1]);
  })
  .catch((err) => {
    console.log();
  });
