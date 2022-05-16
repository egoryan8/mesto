const popup = document.querySelector('.popup');
const profileEditBtn = document.querySelector('.profile__edit-btn');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const formName = document.querySelector('#profile__name');
const formStatus = document.querySelector('#profile__status');
const form = document.querySelector('.form');

function openPopup() {
  popup.classList.add('popup_opened');
  formName.value = profileName.textContent;
  formStatus.value = profileStatus.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileStatus.textContent = formStatus.value;
  closePopup()
}

profileEditBtn.addEventListener('click', openPopup);

popupCloseBtn.addEventListener('click', closePopup);

form.addEventListener('submit', formSubmitHandler);
