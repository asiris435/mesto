const validationConfig = {
    formSelector: '.popup__input',
    inputSelector: '.popup__input-text',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_invalid',
    inputErrorClass: 'popup__error_visible'
  };


function enableValidation (config) {
    const forms =  Array.from(document.querySelectorAll(config.formSelector));
    forms.forEach(function (form) {
        const formInputs =  Array.from(form.querySelectorAll(config.inputSelector));
        const formButton = form.querySelector(config.submitButtonSelector);
        kitEventListeners(formInputs, formButton, config.inactiveButtonClass, config.inputErrorClass);
    }); 
}

function kitEventListeners (formInputs, formButton, inactiveButtonClass, inputErrorClass) {
    formInputs.forEach(function (input) {
        input.addEventListener('input', function() {
            checkInputValidity(input, inputErrorClass);
            toggleButtonState(formInputs, formButton, inactiveButtonClass);
        });
    });
}

function checkInputValidity (input, inputErrorClass) {
    const currentInputErrorContainer = document.querySelector(`#${input.id}-error`);
    if (input.checkValidity()) {
        hideInputError(input, currentInputErrorContainer, inputErrorClass); 
    } else {
        showInputError(input, currentInputErrorContainer, inputErrorClass);
    }
}

function showInputError (input, currentInputErrorContainer, inputErrorClass) {
    input.classList.add(inputErrorClass);
    currentInputErrorContainer.textContent = input.validationMessage;
}

function hideInputError (input, currentInputErrorContainer, inputErrorClass) {
    input.classList.remove(inputErrorClass);
    currentInputErrorContainer.textContent = '';
}

function toggleButtonState (formInputs, formButton, inactiveButtonClass) {
    if (hasInvalidInput(formInputs)) {
        disableButton(formButton, inactiveButtonClass);
    } else  {
        enableButton(formButton, inactiveButtonClass);
    }
}

function hasInvalidInput (formInputs) {
    return Array.from(formInputs).some(item => !item.checkValidity());
}

function enableButton (formbutton, inactiveButtonClass) {
    formbutton.classList.remove(inactiveButtonClass);
    formbutton.disabled = false;
}
    
function disableButton (formbutton, inactiveButtonClass) {
    formbutton.classList.add(inactiveButtonClass);
    formbutton.disabled = true;
}

function resetPopupError (form) {
    form.querySelectorAll(validationConfig.inputSelector).forEach(function (input) {
        const InputErrorContainer = document.querySelector(`#${input.id}-error`);
        if (!input.validity.valid) {
            hideInputError (input, InputErrorContainer, validationConfig.inputSelector, validationConfig.inputErrorClass, validationConfig.errorClass);
        }
    });
}

enableValidation(validationConfig);

