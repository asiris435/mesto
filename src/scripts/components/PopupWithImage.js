import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__place-item');
        this._popupImageCaption = this._popup.querySelector('.popup__place-title');
    }

    open = (cardData) => {
        this._popupImageCaption.textContent = cardData.title;
        this._popupImage.src = cardData.link;
        this._popupImage.alt = cardData.alt;
        super.open();
    }
}