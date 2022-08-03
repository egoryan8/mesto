import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._button = document.querySelector("#unical");

    this._submitHandler = submitHandler;
  }

  setEventListeners() {
    super.setEventListeners();

    this._button.addEventListener("click", () => {
      console.log("qfqfqfq");
      this._submitHandler;
    });
  }
}
