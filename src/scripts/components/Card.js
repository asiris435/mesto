export default class Card {
    constructor (cardData, templateSelector, handleCardClick) {
      this._cardData = cardData;
      this._name = cardData.title;
      this._link = cardData.link;
      this._alt = cardData.alt;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
    }
  
    _getTemplate () {
      return document.querySelector(this._templateSelector).content.querySelector('.elements__card').cloneNode(true);
    }
  
    _handleLikeClick = () => {
      this._likeButtonElement.classList.toggle('elements__like-button_active');
    }
  
    _handleDelet = () => {
      this._clonCardElement.remove();
    }
  
    _handleOpenPopupElPlace = () => {
      this._handleCardClick(this._cardData);
    }
  
    _setEventListeners () {
      this._likeButtonElement.addEventListener('click', this._handleLikeClick);
      this._deletButtonElement.addEventListener('click', this._handleDelet);
      this._imageElement.addEventListener('click', this._handleOpenPopupElPlace);
    }
  
    generateCard () {
      this._clonCardElement = this._getTemplate();
      this._imageElement = this._clonCardElement.querySelector('.elements__item');
      this._deletButtonElement = this._clonCardElement.querySelector('.elements__delet-button');
      this._titleElement = this._clonCardElement.querySelector('.elements__title');
      this._likeButtonElement = this._clonCardElement.querySelector('.elements__like-button');
      this._titleElement.textContent = this._name;
      this._imageElement.src = this._link;
      this._imageElement.alt = this._alt;
      this._setEventListeners();
      return this._clonCardElement;
    }
}
