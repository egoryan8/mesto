const showInputError = (inputElement, errorElement, config) => {
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (inputElement, errorElement, config) => {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-input-error`);
  if (!inputElement.validity.valid) {
    showInputError(inputElement, errorElement, config);
  } else {
    hideInputError(inputElement, errorElement, config);
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => evt.preventDefault());
    setEventListeners(formElement, config);
  });
};

const hasInvalidInput = (inputList) => inputList.some((inputEl) => !inputEl.validity.valid);

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.removeAttribute('disabled', true);
  }
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__save-btn',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_visible',
});
