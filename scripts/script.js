const popupEdit = document.querySelector('.popup_edit-ptofile');
const popupEditOpenBtn = document.querySelector('.profile__edit-btn');
const popupEditCloseBtn = document.querySelector('.popup__close-btn_edit');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const profileInputName = document.querySelector('#profile__name');
const profileInputStatus = document.querySelector('#profile__status');
const formEditProfile = document.querySelector('.form_edit-profile');
const formAddPlace = document.querySelector('.form_add-place');
const likeBtns = document.querySelectorAll('.gallery__like-btn');
const popupAddPlace = document.querySelector('.popup_add-place');
const popupAddOpenBtn = document.querySelector('.profile__add-btn');
const popupAddCloseBtn = document.querySelector('.popup__close-btn_add');
const cardList = document.querySelector('.gallery__grid');
const placeInputName = document.querySelector('#place__name');
const placeInputLink = document.querySelector('#place__link');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
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


for (let i = 0; i < initialCards.length; i++) {
  addCard(i);
}

function addCard(i) {
  const cardTemplate = document.querySelector('#card').content;
  const card = cardTemplate.querySelector('.gallery__grid-item').cloneNode(true);

  card.querySelector('.gallery__image').src = `${initialCards[i].link}`;
  card.querySelector('.gallery__text').textContent = `${initialCards[i].name}`;
  card.querySelector('.gallery__like-btn').addEventListener('click', (event) => {
    event.target.classList.toggle('gallery__like-btn_active');
  })

  cardList.append(card);

}

function formEditSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileStatus.textContent = profileInputStatus.value;
  closePopup(popupEdit);
}

function formPlaceSubmitHandler(evt) {
  evt.preventDefault();
  const cardTemplate = document.querySelector('#card').content;
  const card = cardTemplate.querySelector('.gallery__grid-item').cloneNode(true);

  card.querySelector('.gallery__image').src = placeInputLink.value;
  card.querySelector('.gallery__text').textContent = placeInputName.value;
  card.querySelector('.gallery__like-btn').addEventListener('click', (event) => {
    event.target.classList.toggle('gallery__like-btn_active');
  })

  cardList.append(card);
  closePopup(popupAddPlace);
}

popupEditOpenBtn.addEventListener('click', () => {
  openPopup(popupEdit)
});

popupEditCloseBtn.addEventListener('click', () => {
  closePopup(popupEdit)
});

popupAddOpenBtn.addEventListener('click', () => {
  openPopup(popupAddPlace)
})

popupAddCloseBtn.addEventListener('click', () => {
  closePopup(popupAddPlace)
})

formEditProfile.addEventListener('submit', formEditSubmitHandler);

formAddPlace.addEventListener('submit', formPlaceSubmitHandler);
