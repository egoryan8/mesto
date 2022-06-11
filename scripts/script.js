const popupEdit = document.querySelector('.popup_edit-profile');
const popupEditOpenBtn = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const profileInputName = document.querySelector('#profile__name');
const profileInputStatus = document.querySelector('#profile__status');
const formEditProfile = document.querySelector('.form_edit-profile');
const formAddPlace = document.querySelector('.form_add-place');
const popupAddPlace = document.querySelector('.popup_add-place');
const popupAddOpenBtn = document.querySelector('.profile__add-btn');
const cardsList = document.querySelector('.places__cards-list');
const placeInputName = document.querySelector('#place__name');
const placeInputLink = document.querySelector('#place__link');
const popupOpenCard = document.querySelector('.popup_open-card');
const openedImage = document.querySelector('.popup__image');
const openedImageCaption = document.querySelector('.popup__image-caption');
const popupCloseBtns = document.querySelectorAll('.popup__close-btn');

const openPopup = (popup) => popup.classList.add('popup_opened');
const closePopup = (popup) => popup.classList.remove('popup_opened');

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

//Open card popup

const handleClickToOpenCard = (link, name) => {
  openedImage.src = link;
  openedImage.alt = name;
  openedImageCaption.textContent = name;
  openPopup(popupOpenCard);
};

popupEditOpenBtn.addEventListener('click', () => {
  profileInputName.value = profileName.textContent;
  profileInputStatus.value = profileStatus.textContent;
  openPopup(popupEdit);
});

popupCloseBtns.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

popupAddOpenBtn.addEventListener('click', () => openPopup(popupAddPlace));

formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);

formAddPlace.addEventListener('submit', handleFormAddPlaceSubmit);
