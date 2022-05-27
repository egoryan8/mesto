const popupEditProfile = document.querySelector('.popup_edit-ptofile');
const popupAddPlace = document.querySelector('.popup_add-place');
const popupEditOpenBtn = document.querySelector('.profile__edit-btn');
const popupEditCloseBtn = document.querySelector('.popup__close-btn_edit');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const formName = document.querySelector('#profile__name');
const formStatus = document.querySelector('#profile__status');
const form = document.querySelector('.form');
const likeBtns = document.querySelectorAll('.gallery__like-btn');
const popupAddOpenBtn = document.querySelector('.profile__add-btn');
const popupAddCloseBtn = document.querySelector('.popup__close-btn_add');

function openPopup(element) {
  element.classList.add('popup_opened');
  formName.value = profileName.textContent;
  formStatus.value = profileStatus.textContent;
}

function closePopup(element) {
  element.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileStatus.textContent = formStatus.value;
  closePopup(popupEditProfile);
}

popupEditOpenBtn.addEventListener('click', () => {
  openPopup(popupEditProfile)
});

popupEditCloseBtn.addEventListener('click', () => {
  closePopup(popupEditProfile)
});

popupAddOpenBtn.addEventListener('click', () => {
  openPopup(popupAddPlace)
})

popupAddCloseBtn.addEventListener('click', () => {
  closePopup(popupAddPlace)
})

form.addEventListener('submit', formSubmitHandler);
