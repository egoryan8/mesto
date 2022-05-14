let popup = document.querySelector('.popup');
let profileEditBtn = document.querySelector('.profile__edit-btn');
let popupCloseBtn = document.querySelector('.popup__close-btn');


profileEditBtn.addEventListener('click', function() {
  popup.classList.add('popup_opened');
})

popupCloseBtn.addEventListener('click', function() {
  popup.classList.remove('popup_opened');
})
