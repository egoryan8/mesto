const popupEdit = document.querySelector('.popup_edit-ptofile');
const popupEditOpenBtn = document.querySelector('.profile__edit-btn');
const popupEditCloseBtn = document.querySelector('.popup__close-btn_edit');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const profileInputName = document.querySelector('#profile__name');
const profileInputStatus = document.querySelector('#profile__status');
const formEditProfile = document.querySelector('.form_edit-profile');
const formAddPlace = document.querySelector('.form_add-place');
const popupAddPlace = document.querySelector('.popup_add-place');
const popupAddOpenBtn = document.querySelector('.profile__add-btn');
const popupAddCloseBtn = document.querySelector('.popup__close-btn_add');
const cardList = document.querySelector('.gallery__grid');
const placeInputName = document.querySelector('#place__name');
const placeInputLink = document.querySelector('#place__link');
const popupOpenCard = document.querySelector('.popup_open-card');
const popupOpenCardCloseBtn = document.querySelector('.popup__close-btn_open-card');
const openedImage = document.querySelector('.popup__image');
const openedImageCaption = document.querySelector('.popup__image-caption');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Республика Алтай',
    link: 'https://images.unsplash.com/photo-1582086670462-bd0b47819245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const openPopup = popupEl => popupEl.classList.add('popup_opened');
const closePopup = popupEl => popupEl.classList.remove('popup_opened');

//Edit Profile

function formEditSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileStatus.textContent = profileInputStatus.value;
  closePopup(popupEdit);
}

popupEditOpenBtn.addEventListener('click', () => {
  openPopup(popupEdit)
})

popupEditCloseBtn.addEventListener('click', () => {
  closePopup(popupEdit)
})

formEditProfile.addEventListener('submit', formEditSubmitHandler);

//Initial fill cards

const likeCard = event => event.target.classList.toggle('gallery__like-btn_active');
const deleteCard = event => event.target.closest('.gallery__grid-item').remove();

for (let i = initialCards.length - 1; i >= 0; i--) {
  addCard(initialCards[i].link, initialCards[i].name);
}

function addCard(link, name) {
  const cardTemplate = document.querySelector('#card').content;
  const card = cardTemplate.querySelector('.gallery__grid-item').cloneNode(true);
  const cardImage = card.querySelector('.gallery__image');
  const cardTitle = card.querySelector('.gallery__text');

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  card.querySelector('.gallery__like-btn').addEventListener('click', likeCard);
  card.querySelector('.gallery__delete-btn').addEventListener('click', deleteCard);
  cardImage.addEventListener('click', () => cardClick(link, name))
  cardList.prepend(card);
}

//Add a card

function formPlaceSubmitHandler(evt) {
  evt.preventDefault();
  addCard(placeInputLink.value, placeInputName.value);
  closePopup(popupAddPlace);
}

popupAddOpenBtn.addEventListener('click', () => {
  openPopup(popupAddPlace)
})

popupAddCloseBtn.addEventListener('click', () => {
  closePopup(popupAddPlace)
})

formAddPlace.addEventListener('submit', formPlaceSubmitHandler);

//Open card popup

function cardClick(link, name) {
  openPopup(popupOpenCard);
  openedImage.src = link;
  openedImage.alt = name;
  openedImageCaption.textContent = name;
}

popupOpenCardCloseBtn.addEventListener('click',() => closePopup(popupOpenCard))
