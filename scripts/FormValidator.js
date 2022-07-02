export default class FormValidator {
  constructor(formElement, config) {
    this._form = formElement;
    this._inputSelector = config.inputSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._submitBtnSelector = config.submitBtnSelector;
    this._inactiveBtnClass = config.inactiveBtnClass;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitBtnElement = this._form.querySelector(this._submitBtnSelector);
  }

  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._errorElement = this._form.querySelector(`.${inputElement.id}-input-error`);
      this._hideInputError(inputElement);
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement) {
    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    if (!this._errorElement) return;
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.textContent = '';
    this._errorElement.classList.remove(this._errorClass);
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitBtnElement.classList.add(this._inactiveBtnClass);
      this._submitBtnElement.setAttribute('disabled', 'true');
    } else {
      this._submitBtnElement.classList.remove(this._inactiveBtnClass);
      this._submitBtnElement.removeAttribute('disabled');
    }
  }

  enableValidation() {
    this._form.addEventListener('submit', (evt) => evt.preventDefault());
    this._setEventListeners();
  }
}
