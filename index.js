let popupContainer = document.querySelector('.popup__container');
let openFormButton = document.querySelector('.profile__edit-button');
let closeFormButton = document.querySelector('.edit-form__close-button');

openFormButton.addEventListener('click', openForm);
closeFormButton.addEventListener('click', closeForm);

function openForm() {
    popupContainer.classList.add('popup__container_opened');
}

function closeForm() {
    popupContainer.classList.remove('popup__container_opened')
}




let formElement = document.querySelector('.form__submit-button');
let nameInput = document.querySelector('.profile__title');
let jobInput = document.querySelector('.profile__subtitle');
let profileInfo = document.querySelector('.profile__info');

/*
function handleFormSubmit(evt) {
    evt.preventDefault();
}

function editForm() {
    profileInfo.insertAdjacentHTML('beforeend', `
    <div class="profile__info">
        <div class="profile__info-groupe">
            <h1 class="profile__title">${nameInput.value}</h1> 
            <button class="profile__edit-button">
                <img class="profile__image-pencil" src="./images/pencil.svg" alt="изображение карандаша">
            </button>
        </div>
        <p class="profile__subtitle">${jobInput.value}</p>
    </div>`);

    nameInput.value = '';
    jobInput.value = '';

    renderAdded();
}

formElement.addEventListener('submit', handleFormSubmit); 

*/