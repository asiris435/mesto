import Popup from "./Popup.js";

export default class PopupCardDelete extends Popup {
    constructor (popupSelector, submitFunction) {
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._submitButton = this._form.querySelector('.popup__submit-button');
        this._defaultTextButton = this._submitButton.textContent;
    }
    
    setEventListeners () {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitButton.textContent = `${this._submitButton.textContent}...`;
            this._submitFunction({ element: this._element, cardId: this._cardId });
        });
    }

    open = ({ element, cardId }) => {
        super.open();
        this._element = element;
        this._cardId = cardId;
    }

    setupDefaultText () {
        this._submitButton.textContent = this._defaultTextButton;
    }
}