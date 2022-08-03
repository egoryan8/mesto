import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._button = document.querySelector("#unical");

    this._submitHandler = submitHandler;
  }

  open(card) {
    this._card = card;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();

    this._button.addEventListener("click", () => {
      this._submitHandler(this._card);
    });
  }
}
