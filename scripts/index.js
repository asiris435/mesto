import initialCards from './cards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const popupList = document.querySelectorAll('.popup');
const popupElProfile = document.querySelector('.popup_type_profile');
const popupElAddPhoto = document.querySelector('.popup_type_add-photo');
const popupElPlaceImg = document.querySelector('.popup_type_image');
const elementsList = document.querySelector('.elements__list');
const popupOpenBtnElement = document.querySelector('.profile__edit-button');
const popupOpenBtnElAddPhoto = document.querySelector('.profile__add-button');
const nameInput = popupElProfile.querySelector('.popup__input-text_type_name');
const jobInput = popupElProfile.querySelector('.popup__input-text_type_job');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const profileForm = document.forms['profile-form'];
const cardForm = document.forms['card-form'];
const placeInput = popupElAddPhoto.querySelector('.popup__input-text_type_place');
const linkInput = popupElAddPhoto.querySelector('.popup__input-text_type_link');
const placeImgOpen = popupElPlaceImg.querySelector('.popup__place-item');
const placeTextOpen = popupElPlaceImg.querySelector('.popup__place-title');

const templateSelector = '.card-template';

const validationConfig = {
  formSelector: '.popup__input',
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__error_visible'
};

const popupElProfileValidator = new FormValidator (validationConfig, popupElProfile);
popupElProfileValidator.enableValidation();

const popupElAddPhotoValidator = new FormValidator (validationConfig, popupElAddPhoto);
popupElAddPhotoValidator.enableValidation();


function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
}

function handleFormProfileSubmit (event) {
  event.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupElProfile);
}

function openPopupElPlace (cardData) {
  placeTextOpen.textContent = cardData.name;
  placeImgOpen.src = cardData.link;
  placeImgOpen.alt = cardData.alt;
  openPopup(popupElPlaceImg);
}

function createCard (element) {
  const card = new Card (element, templateSelector, openPopupElPlace);
  return card.generateCard();
}

initialCards.forEach (function (element)  {
  renderCard(elementsList, createCard(element));
});

function renderCard (elementsList, card) {
  elementsList.prepend(card);
}

function handleFormAddPhotoSubmit (event) {
  event.preventDefault();
  const newAddedCard = {name:placeInput.value, link:linkInput.value, alt:placeInput.value};
  renderCard (elementsList, createCard(newAddedCard));
  closePopup(popupElAddPhoto);
  event.target.reset();
}

function openPopupElProfile () {
  popupElProfileValidator.resetValidation();
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupElProfile);
}

function openPopupElAddPhoto () {
  popupElAddPhotoValidator.resetValidation();
  cardForm.reset();
  openPopup(popupElAddPhoto);
}

function closePopupElProfile () {
  closePopup(popupElProfile);
}

function closePopupElAddPhoto () {
  closePopup(popupElAddPhoto);
}

function closePopupElPlaceImg () {
  closePopup(popupElPlaceImg);
}

function closePopupEscape (event) {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened);
  }
}


popupOpenBtnElement.addEventListener('click', openPopupElProfile);
popupOpenBtnElAddPhoto.addEventListener('click', openPopupElAddPhoto);
profileForm.addEventListener('submit', handleFormProfileSubmit);
cardForm.addEventListener('submit', handleFormAddPhotoSubmit);
popupList.forEach(function (popup) {
  popup.addEventListener('mousedown', function (event) {
    if (event.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (event.target.classList.contains('popup__close')) {
      closePopup(popup);
    } 
  });
});




