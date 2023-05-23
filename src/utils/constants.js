  const popupOpenBtnElement = document.querySelector('.profile__edit-button');
  const popupOpenBtnElAddPhoto = document.querySelector('.profile__add-button');
  const popupOpenBtnElUpdateAvatar = document.querySelector('.profile__avatar-button');
  const templateSelector = '.card-template';
  const elementsListSelector = '.elements__list';
  const popupImageSelector = '.popup_type_image';
  const popupProfileSelector = '.popup_type_profile';
  const popupAddPhotoSelector = '.popup_type_add-photo';
  const popupUpdateAvatarSelector = '.popup_type_update-avatar';
  const popupCardDeleteSelector = '.popup_type_card-delete';

  const profileInfoConfig = {
    nameProfileSelector: '.profile__name',
    jobProfileSelector: '.profile__job',
    avatarProfileSelector: '.profile__avatar' 
  };
  
  const validationConfig = {
    formSelector: '.popup__input',
    inputSelector: '.popup__input-text',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_invalid',
    inputErrorClass: 'popup__error_visible'
  };

  const formValidators = {};

  export {
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
  };