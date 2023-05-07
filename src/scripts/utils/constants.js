const initialCards = [
    {
      title: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      alt:  'изображение гор в Карачаево-Черкессии'
    },
    {
      title: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      alt:  'изображение реки в Челябинской области'
    },
    {
      title: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
      alt:  'изображение спального района в городе Иваново'
    },
    {
      title: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
      alt:  'изображение потухшего вулкана на Камчатке'
    },
    {
      title: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
      alt:  'изображение железной дороги в Холмогорском районе'
    },
    {
      title: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
      alt:  'изображение побережья озера Байкал'
    }
  ];

  const popupOpenBtnElement = document.querySelector('.profile__edit-button');
  const popupOpenBtnElAddPhoto = document.querySelector('.profile__add-button');
  const templateSelector = '.card-template';
  const elementsListSelector = '.elements__list';
  const popupImageSelector = '.popup_type_image';
  const popupProfileSelector = '.popup_type_profile';
  const popupAddPhotoSelector = '.popup_type_add-photo';

  const profileInfoConfig = {
    nameProfileSelector: '.profile__name',
    jobProfileSelector: '.profile__job' 
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
  };