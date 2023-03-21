const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const popup = document.querySelectorAll('.popup');
const popupElProfile = document.querySelector('.popup__form_type_profile');
const popupElAddPhoto = document.querySelector('.popup__form_type_add-photo');
const popupElPlaceImg = document.querySelector('.popup__place_type_image');
const cardTemplate = document.querySelector('.card-template').content;
const elementsList = document.querySelector('.elements__list');
const popupOpenBtnElement = document.querySelector('.profile__edit-button');
const popupOpenBtnElAddPhoto = document.querySelector('.profile__add-button');
const popupOpenElPlaceImg = cardTemplate.querySelector('.elements__item');
const popupCloseBtnElement = popupElProfile.querySelector('.popup__close_type_profile');
const popupCloseBtnElAddPhoto = popupElAddPhoto.querySelector('.popup__close_type_add-photo');
const popupCloseBtnElPlaceImg = popupElPlaceImg.querySelector('.popup__close_type_place-image');
const nameInput = popupElProfile.querySelector('.popup__input-text_type_name');
const jobInput = popupElProfile.querySelector('.popup__input-text_type_job');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const formElProfile = popupElProfile.querySelector('.popup__container_type_profile');
const formElAddPhoto = popupElAddPhoto.querySelector('.popup__container_type_add-photo');
const placeInput = popupElAddPhoto.querySelector('.popup__input-text_type_place');
const linkInput = popupElAddPhoto.querySelector('.popup__input-text_type_link');
const placeImgOpen = popupElPlaceImg.querySelector('.popup__place-item');
const placeTextOpen = popupElPlaceImg.querySelector('.popup__place-title');


function openPopup (popup) {
  popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

function handleFormProfileSubmit (event) {
  event.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupElProfile);
}

function createCard (element) {
  const clonCardElement = cardTemplate.cloneNode(true);
  const cardTitle = clonCardElement.querySelector('.elements__title');
  const cardLink = clonCardElement.querySelector('.elements__item');
  cardTitle.textContent = element.name;
  cardLink.src = element.link;
  cardLink.addEventListener('click', function () {
    placeTextOpen.textContent = element.name;
    placeImgOpen.src = element.link;
    openPopup(popupElPlaceImg);
  });
  setEventListeners(clonCardElement);
  return clonCardElement;
}

initialCards.forEach (function (element)  {
  const card = createCard (element);
  elementsList.append(card);
});

function handleFormAddPhotoSubmit (event) {
  event.preventDefault();
  const newCard = {name:placeInput.value, link:linkInput.value};
  elementsList.prepend(createCard (newCard));
  closePopup(popupElAddPhoto);
}

function putLike (event) {
  const cardLike = event.target.closest('.elements__like-button');
  cardLike.classList.toggle('elements__like-button_active');
}

function handleDelet (event) {
  const card = event.target.closest('.elements__card');
  card.remove();
}

function setEventListeners (clonCardElement) {
  clonCardElement.querySelector('.elements__delet-button').addEventListener('click', handleDelet);
  clonCardElement.querySelector('.elements__like-button').addEventListener('click', putLike);
}


popupOpenBtnElement.addEventListener('click', function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupElProfile);
});

popupOpenBtnElAddPhoto.addEventListener('click', function() {
  openPopup(popupElAddPhoto);
});

popupCloseBtnElement.addEventListener('click', function() {
  closePopup(popupElProfile);
});

popupCloseBtnElAddPhoto.addEventListener('click', function() {
  closePopup(popupElAddPhoto);
});

popupCloseBtnElPlaceImg.addEventListener('click', function () {
  closePopup(popupElPlaceImg);
});

formElProfile.addEventListener('submit', handleFormProfileSubmit);

formElAddPhoto.addEventListener('submit', handleFormAddPhotoSubmit);








