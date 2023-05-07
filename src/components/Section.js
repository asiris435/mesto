export default class Section {
    constructor ({ items, renderer }, containerSelector) {
        this._initialCards = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addCardFromArray () {
        this._initialCards.forEach(element => {
            this._renderer(element);
        });
    }

    addItem (domElement) {
        this._container.prepend(domElement);
    }
}