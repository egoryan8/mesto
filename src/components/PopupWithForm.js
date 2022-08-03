import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector(".form");
    this._inputList = this._popup.querySelectorAll(".form__item");
    this._submitButton = this._form.querySelector(".form__save-btn");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
    });
  }

  close() {
    super.close();

    this._form.reset();
  }

  handleButtonText(isLoading) {
    isLoading
      ? (this._submitButton.textContent = "Сохранение...")
      : (this._submitButton.textContent = "Сохранить");
  }
}
