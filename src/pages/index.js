import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
  initialCards,
  popupOpenBtnElement,
  popupOpenBtnElAddPhoto,
  templateSelector,
  elementsListSelector,
  popupImageSelector,
  popupProfileSelector,
  popupAddPhotoSelector,
  profileInfoConfig,
  validationConfig,
  formValidators
} from '../utils/constants.js';


function createCard (element) {
  const card = new Card (element, templateSelector, popupWithImage.open);
  return card.generateCard();
}


const popupWithImage = new PopupWithImage (popupImageSelector);
popupWithImage.setEventListeners();

const section = new Section ({
  items: initialCards,
  renderer: (data) => {
    section.addItem(createCard(data));
  }
}, elementsListSelector);
section.addCardFromArray();

const userInfo = new UserInfo (profileInfoConfig);

const popupProfile = new PopupWithForm (popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
});
popupProfile.setEventListeners();

const popupAddPhoto = new PopupWithForm (popupAddPhotoSelector, (data) => {
  section.addItem(createCard(data));
});
popupAddPhoto.setEventListeners();

Array.from(document.forms).forEach(item => {
  const form = new FormValidator (validationConfig, item);
  const name = item.name;
  formValidators[name] = form;
  form.enableValidation();
});


popupOpenBtnElement.addEventListener('click', () => {
  formValidators['profileForm'].resetValidation();
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
});

popupOpenBtnElAddPhoto.addEventListener('click', () => {
  formValidators['cardForm'].resetValidation();
  popupAddPhoto.open();
});
