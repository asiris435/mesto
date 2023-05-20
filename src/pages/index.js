import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupCardDelete from '../components/PopupCardDelete.js';
import {
  initialCards,
  popupOpenBtnElement,
  popupOpenBtnElAddPhoto,
  popupOpenBtnElUpdateAvatar,
  templateSelector,
  elementsListSelector,
  popupImageSelector,
  popupProfileSelector,
  popupAddPhotoSelector,
  popupUpdateAvatarSelector,
  popupCardDeleteSelector,
  profileInfoConfig,
  validationConfig,
  formValidators
} from '../utils/constants.js';


function createCard (element) {
  const card = new Card (element, templateSelector, popupWithImage.open, popupCardDelete.open);
  return card.generateCard();
}


const popupCardDelete = new PopupCardDelete (popupCardDeleteSelector, (element) => {
  element.removeCard();
  popupCardDelete.close();
}); 
popupCardDelete.setEventListeners();

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

const popupUpdateAvatar = new PopupWithForm (popupUpdateAvatarSelector, (data) => {
  document.querySelector('.profile__avatar').src = data.updateAvatar;
  popupUpdateAvatar.close();
});
popupUpdateAvatar.setEventListeners();


Array.from(document.forms).forEach(item => {
  const form = new FormValidator (validationConfig, item);
  const name = item.name;
  formValidators[name] = form;
  form.enableValidation();
});


popupOpenBtnElement.addEventListener('click', () => {
  formValidators.profileForm.resetValidation();
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
});

popupOpenBtnElAddPhoto.addEventListener('click', () => {
  formValidators.cardForm.resetValidation();
  popupAddPhoto.open();
});

popupOpenBtnElUpdateAvatar.addEventListener('click', () => {
  formValidators.updateAvatar.resetValidation();
  popupUpdateAvatar.open();
})