import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";

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
  popupConfirmDelete,
  cardTemplate,
} from "../utils/constants.js";

const api = new Api({
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
  const card = new Card(
    {
      name: cardData.name,
      link: cardData.link,
      likes: cardData.likes,
      userId: userId,
      ownerId: cardData.owner._id,
      cardId: cardData._id,
    },
    cardTemplate,
    handleClickToOpenCard,
    () => popupConfirm.open(card),
    () => {
      return api
        .addLike(cardData)
        .then((res) => {
          card.setLikesCount(res);
          card.addLike();
        })
        .catch((err) => console.log(err));
    },
    () => {
      return api
        .deleteLike(cardData)
        .then((res) => {
          card.setLikesCount(res);
          card.removeLike();
        })
        .catch((err) => console.log(err));
    }
  );

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
  popupNewPlace.handleButtonText(true);
  return api
    .addCard(cardData)
    .then((card) => {
      cardsSection.addItem(createCard(card));
      popupNewPlace.close();
    })
    .catch((err) => {
      console.log(err);
    });
};

const popupNewPlace = new PopupWithForm(
  popupAddPlace,
  handleFormAddPlaceSubmit
);
popupNewPlace.setEventListeners();

const popupImage = new PopupWithImage(popupOpenCard);
popupImage.setEventListeners();

const profileInfo = new UserInfo({
  profileName: profileName,
  profileStatus: profileStatus,
  profileAvatar: profileAvatar,
});

const handleFormProfileSubmit = (userInfo) => {
  popupProfile.handleButtonText(true);
  return api
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
  popupAvatar.handleButtonText(true);
  return api
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

const handlePopupConfirmSubmit = (card) => {
  return api
    .deleteCard(card._cardId)
    .then(() => {
      card.deleteCard();
      popupConfirm.close();
    })
    .catch((err) => console.log(err));
};

const popupConfirm = new PopupWithConfirm(
  popupConfirmDelete,
  handlePopupConfirmSubmit
);
popupConfirm.setEventListeners();

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

// Promise all

let userId;

Promise.all([api.getCards(), api.getProfile()])
  .then((value) => {
    userId = value[1]._id;
    cardsSection.renderItems(value[0].reverse());
    profileInfo.setUserInfo(value[1]);
  })
  .catch((err) => {
    console.log(err);
  });

//LISTENERS

popupEditOpenButton.addEventListener("click", () => {
  const userInfo = profileInfo.getUserInfo();
  profileInputName.value = userInfo.name;
  profileInputStatus.value = userInfo.about;
  formValidators["edit-profile-form"].resetValidation();
  popupProfile.handleButtonText(false);
  popupProfile.open();
});

popupAddOpenButton.addEventListener("click", () => {
  formValidators["add-place-form"].resetValidation();
  popupNewPlace.handleButtonText(false);
  popupNewPlace.open();
});

editAvatarOpenButton.addEventListener("click", () => {
  formValidators["edit-avatar-form"].resetValidation();
  popupAvatar.handleButtonText(false);
  popupAvatar.open();
});

activateValidation();
