export default class Section {
    constructor (renderer, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addCardFromArray (dataCard) {
        dataCard.forEach(element => {
            this._renderer(element);
        });
    }

    addItem (domElement) {
        this._container.prepend(domElement);
    }
}