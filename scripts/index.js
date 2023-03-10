const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const nameInput = popupElement.querySelector('.popup__input-text_type_name');
const jobInput = popupElement.querySelector('.popup__input-text_type_job');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const formElement = popupElement.querySelector('.popup__container');

const openPopup = function () {
    popupElement.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened');
}

const handleFormSubmit = function (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);
