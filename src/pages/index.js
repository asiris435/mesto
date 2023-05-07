import './index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
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
} from '../scripts/utils/constants.js';


const popupWithImage = new PopupWithImage (popupImageSelector);
popupWithImage.setEventListeners();

const section = new Section ({
  items: initialCards,
  renderer: (element) => {
    const card = new Card (element, templateSelector, popupWithImage.open);
    return card.generateCard();
  }
}, elementsListSelector);
section.addCardFromArray();

const userInfo = new UserInfo (profileInfoConfig);

const popupProfile = new PopupWithForm (popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
});
popupProfile.setEventListeners();

const popupAddPhoto = new PopupWithForm (popupAddPhotoSelector, (data) => {
  section.addItem(data);
});
popupAddPhoto.setEventListeners();

Array.from(document.forms).forEach(item => {
  const form = new FormValidator (validationConfig, item);
  const name = item.name;
  formValidators[name] = form;
  form.enableValidation();
});


popupOpenBtnElement.addEventListener('click', () => {
  formValidators['profile-form'].resetValidation();
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
});

popupOpenBtnElAddPhoto.addEventListener('click', () => {
  formValidators['card-form'].resetValidation();
  popupAddPhoto.open();
});




