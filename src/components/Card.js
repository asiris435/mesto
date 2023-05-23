export default class Card {
    constructor (cardData, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
      this._cardData = cardData;
      this._name = cardData.name;
      this._link = cardData.link;
      this._alt = cardData.alt;
      this._myId = cardData.myId;
      this._ownerId = cardData.owner._id;
      this._likes = cardData.likes;
      this._cardId = cardData._id;
      this._likesLength = cardData.likes.length;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
      this._handleDeleteClick = handleDeleteClick;
      this._handleLikeClick = handleLikeClick;
    }
  
    _getTemplate () {
      return document.querySelector(this._templateSelector).content.querySelector('.elements__card').cloneNode(true);
    }
  
    _handleLike = () => {
      this._handleLikeClick(this._likeButtonElement, this._cardId);
    }
  
    _handleDelet = () => {
      this._handleDeleteClick({ element: this, cardId: this._cardId });
    }
  
    _handleOpenPopupElPlace = () => {
      this._handleCardClick(this._cardData);
    }
  
    _setEventListeners () {
      this._likeButtonElement.addEventListener('click', this._handleLike);
      this._deleteButtonElement.addEventListener('click', this._handleDelet);
      this._imageElement.addEventListener('click', this._handleOpenPopupElPlace);
    }
  
    _removeDeleteButton () {
      if (this._myId !== this._ownerId) {
        this._deleteButtonElement.remove();
      } else {
        return this._deleteButtonElement;
      }
    }

    _checkLikesStatus () {
      this._likes.forEach((item) => {
        if (item._id === this._myId) {
          this._likeButtonElement.classList.add('elements__like-button_active');
          return;
        }
      });
      this._likeCounterElement.textContent = this._likesLength;
    }

    removeCard () {
      this._clonCardElement.remove();
      this._clonCardElement = null;
    }

    toggleLike (likes) {
      this._likeButtonElement.classList.toggle('elements__like-button_active');
      this._likeCounterElement.textContent = likes.length;
    }

    generateCard () {
      this._clonCardElement = this._getTemplate();
      this._imageElement = this._clonCardElement.querySelector('.elements__item');
      this._deleteButtonElement = this._clonCardElement.querySelector('.elements__delet-button');
      this._titleElement = this._clonCardElement.querySelector('.elements__title');
      this._likeButtonElement = this._clonCardElement.querySelector('.elements__like-button');
      this._likeCounterElement = this._clonCardElement.querySelector('.elements__counter');
      this._titleElement.textContent = this._name;
      this._imageElement.src = this._link;
      this._imageElement.alt = this._alt;
      this._removeDeleteButton();
      this._checkLikesStatus();
      this._setEventListeners();
      return this._clonCardElement;
    } 
}
