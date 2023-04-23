export default class FormValidator {
    constructor (config, form) {
      this._formSelector = config.formSelector;
      this._inputSelector = config.inputSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._inactiveButtonClass = config.inactiveButtonClass;
      this._inputErrorClass = config.inputErrorClass;
      this._form = form;
      this._formInputs = form.querySelectorAll(this._inputSelector);
      this._formButton = form.querySelector(this._submitButtonSelector);
    }
  
    _showInputError () {
      this._input.classList.add(this._inputErrorClass);
      this._currentInputErrorContainer.textContent = this._input.validationMessage;
    } 
  
    _hideInputError () {
      this._input.classList.remove(this._inputErrorClass);
      this._currentInputErrorContainer.textContent = '';
    }
  
    _disableButton () {
      this._formButton.classList.add(this._inactiveButtonClass);
      this._formButton.disabled = true;
    }
  
    _enableButton () {
      this._formButton.classList.remove(this._inactiveButtonClass);
      this._formButton.disabled = false;
    }
  
    _hasInvalidInput () {
      return Array.from(this._formInputs).some(item => !item.checkValidity());
    }
  
    _toggleButtonState () {
      if (this._hasInvalidInput()) {
          this._disableButton(this._formButton);
      } else  {
          this._enableButton();
        }
    } 
  
    _checkInputValidity () {
      this._currentInputErrorContainer = this._form.querySelector(`#${this._input.id}-error`);
      if (this._input.checkValidity()) {
          this._hideInputError(); 
      } else {
          this._showInputError();
        }
    }
  
    _kitEventListeners () {
      this._formInputs.forEach(input => {
        input.addEventListener('input', () => {
            this._input = input;
            this._checkInputValidity();
            this._toggleButtonState();
        });
      });
    }
  
    enableValidation () {
      this._kitEventListeners();
    }
  
    resetPopupError () {
      this._formInputs.forEach(input => {
        this._input = input;
        this._currentInputErrorContainer = this._form.querySelector(`#${this._input.id}-error`);
        if (!input.validity.valid) {
          this._hideInputError ();
        }
      });
      this._disableButton();
    }
  }