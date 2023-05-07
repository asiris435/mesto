import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector, submitFunction) {
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.popup__input');
        this._inputList = this._form.querySelectorAll('.popup__input-text');
    }

    _getInputValues () {
        this._values = {};
        Array.from(this._inputList).forEach(input => {
            this._values[input.name] = input.value;
        });
        return this._values;
    }

    setInputValues (userData) {
        Array.from(this._inputList).forEach(input => {
            input.value = userData[input.name];
        });
    }

    setEventListeners () {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitFunction(this._getInputValues());
            this.close();
        });
    }

    close () {
        super.close();
        this._form.reset();
    }
}