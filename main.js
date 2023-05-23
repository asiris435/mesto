(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function n(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var o=function(){function t(e,r,o,i,u){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"_handleLike",(function(){a._handleLikeClick(a._likeButtonElement,a._cardId)})),n(this,"_handleDelet",(function(){a._handleDeleteClick({element:a,cardId:a._cardId})})),n(this,"_handleOpenPopupElPlace",(function(){a._handleCardClick(a._cardData)})),this._cardData=e,this._name=e.name,this._link=e.link,this._alt=e.alt,this._myId=e.myId,this._ownerId=e.owner._id,this._likes=e.likes,this._cardId=e._id,this._likesLength=e.likes.length,this._templateSelector=r,this._handleCardClick=o,this._handleDeleteClick=i,this._handleLikeClick=u}var r,o;return r=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){this._likeButtonElement.addEventListener("click",this._handleLike),this._deleteButtonElement.addEventListener("click",this._handleDelet),this._imageElement.addEventListener("click",this._handleOpenPopupElPlace)}},{key:"_removeDeleteButton",value:function(){if(this._myId===this._ownerId)return this._deleteButtonElement;this._deleteButtonElement.remove()}},{key:"_checkLikesStatus",value:function(){var t=this;this._likes.forEach((function(e){e._id!==t._myId||t._likeButtonElement.classList.add("elements__like-button_active")})),this._likeCounterElement.textContent=this._likesLength}},{key:"removeCard",value:function(){this._clonCardElement.remove(),this._clonCardElement=null}},{key:"toggleLike",value:function(t){this._likeButtonElement.classList.toggle("elements__like-button_active"),this._likeCounterElement.textContent=t.length}},{key:"generateCard",value:function(){return this._clonCardElement=this._getTemplate(),this._imageElement=this._clonCardElement.querySelector(".elements__item"),this._deleteButtonElement=this._clonCardElement.querySelector(".elements__delet-button"),this._titleElement=this._clonCardElement.querySelector(".elements__title"),this._likeButtonElement=this._clonCardElement.querySelector(".elements__like-button"),this._likeCounterElement=this._clonCardElement.querySelector(".elements__counter"),this._titleElement.textContent=this._name,this._imageElement.src=this._link,this._imageElement.alt=this._alt,this._removeDeleteButton(),this._checkLikesStatus(),this._setEventListeners(),this._clonCardElement}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._form=n,this._formInputs=n.querySelectorAll(this._inputSelector),this._formButton=n.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(){this._input.classList.add(this._inputErrorClass),this._currentInputErrorContainer.textContent=this._input.validationMessage}},{key:"_hideInputError",value:function(){this._input.classList.remove(this._inputErrorClass),this._currentInputErrorContainer.textContent=""}},{key:"_disableButton",value:function(){this._formButton.classList.add(this._inactiveButtonClass),this._formButton.disabled=!0}},{key:"_enableButton",value:function(){this._formButton.classList.remove(this._inactiveButtonClass),this._formButton.disabled=!1}},{key:"_hasInvalidInput",value:function(){return Array.from(this._formInputs).some((function(t){return!t.checkValidity()}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton(this._formButton):this._enableButton()}},{key:"_checkInputValidity",value:function(){this._currentInputErrorContainer=this._form.querySelector("#".concat(this._input.id,"-error")),this._input.checkValidity()?this._hideInputError():this._showInputError()}},{key:"_setEventListeners",value:function(){var t=this;this._formInputs.forEach((function(e){e.addEventListener("input",(function(){t._input=e,t._checkInputValidity(),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._formInputs.forEach((function(e){t._input=e,t._currentInputErrorContainer=t._form.querySelector("#".concat(t._input.id,"-error")),e.validity.valid||t._hideInputError()})),this._disableButton()}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var s=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addCardFromArray",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function y(t,e,n){return(e=h(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(e)?e:String(e)}var m=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),y(this,"_handleCloseButton",(function(){n.close()})),y(this,"_handleClickOverlay",(function(t){t.target===t.currentTarget&&n.close()})),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close"),this._form=this._popup.querySelector(".popup__input")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popupCloseButton.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",this._handleClickOverlay)}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}function g(t){var e=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===_(e)?e:String(e)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(r){var o=S(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return b(t)}(this,t)});function i(t){var e,n,r,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=b(n=o.call(this,t)),a=function(t){n._popupImageCaption.textContent=t.title,n._popupImage.src=t.link,n._popupImage.alt=t.alt,v((e=b(n),S(i.prototype)),"open",e).call(e)},(u=g(u="open"))in r?Object.defineProperty(r,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[u]=a,n._popupImage=n._popup.querySelector(".popup__place-item"),n._popupImageCaption=n._popup.querySelector(".popup__place-title"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(m);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var P=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameProfile=document.querySelector(e.nameProfileSelector),this._jobProfile=document.querySelector(e.jobProfileSelector),this._avatarProfile=document.querySelector(e.avatarProfileSelector)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{username:this._nameProfile.textContent,job:this._jobProfile.textContent}}},{key:"setUserInfo",value:function(t){var e=t.username,n=t.job,r=t.avatar;this._nameProfile.textContent=e,this._jobProfile.textContent=n,this._avatarProfile.src=r}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitFunction=e,n._form=n._popup.querySelector(".popup__input"),n._inputList=n._form.querySelectorAll(".popup__input-text"),n._submitButton=n._form.querySelector(".popup__submit-button"),n._defaultTextButton=n._submitButton.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._values={},Array.from(this._inputList).forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setInputValues",value:function(t){Array.from(this._inputList).forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;O(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton.textContent="".concat(t._submitButton.textContent,"..."),t._submitFunction(t._getInputValues())}))}},{key:"close",value:function(){O(B(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setupDefaultText",value:function(){this._submitButton.textContent=this._defaultTextButton}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,U(r.key),r)}}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},D.apply(this,arguments)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}function U(t){var e=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===T(e)?e:String(e)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return q(t)}(this,t)});function u(t,e){var n,r,o,a,l;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),o=q(r=i.call(this,t)),l=function(t){var e=t.element,o=t.cardId;D((n=q(r),A(u.prototype)),"open",n).call(n),r._element=e,r._cardId=o},(a=U(a="open"))in o?Object.defineProperty(o,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[a]=l,r._submitFunction=e,r._submitButton=r._form.querySelector(".popup__submit-button"),r._defaultTextButton=r._submitButton.textContent,r}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;D(A(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton.textContent="".concat(t._submitButton.textContent,"..."),t._submitFunction({element:t._element,cardId:t._cardId})}))}},{key:"setupDefaultText",value:function(){this._submitButton.textContent=this._defaultTextButton}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===z(o)?o:String(o)),r)}var o}var N=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserProfileInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.username,about:t.job})}).then(this._checkResponse)}},{key:"setNewAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.linkAvatar})}).then(this._checkResponse)}},{key:"addPhoto",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.title,link:t.link})}).then(this._checkResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),J=document.querySelector(".profile__edit-button"),H=document.querySelector(".profile__add-button"),M=document.querySelector(".profile__avatar-button"),$={formSelector:".popup__input",inputSelector:".popup__input-text",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_invalid",inputErrorClass:"popup__error_visible"},G={};function K(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function W(t){var e=new o(t,".card-template",Z.open,Y.open,(function(t,n){t.classList.contains("elements__like-button_active")?X.deleteLike(n).then((function(t){e.toggleLike(t.likes)})).catch((function(t){console.log(t)})):X.addLike(n).then((function(t){e.toggleLike(t.likes)})).catch((function(t){console.log(t)}))}));return e.generateCard()}var X=new N({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"2715081b-0de1-4113-a2a5-4588462954ff","Content-Type":"application/json"}}),Y=new V(".popup_type_card-delete",(function(t){var e=t.element,n=t.cardId;X.deleteCard(n).then((function(){e.removeCard(),Y.close()})).catch((function(t){console.log(t)})).finally((function(){Y.setupDefaultText()}))}));Y.setEventListeners();var Z=new k(".popup_type_image");Z.setEventListeners();var tt=new s((function(t){tt.addItem(W(t))}),".elements__list"),et=new P({nameProfileSelector:".profile__name",jobProfileSelector:".profile__job",avatarProfileSelector:".profile__avatar"}),nt=new L(".popup_type_profile",(function(t){X.setUserInfo(t).then((function(t){et.setUserInfo({username:t.name,job:t.about,avatar:t.avatar}),nt.close()})).catch((function(t){console.log(t)})).finally((function(){nt.setupDefaultText()}))}));nt.setEventListeners();var rt=new L(".popup_type_add-photo",(function(t){Promise.all([X.getUserProfileInfo(),X.addPhoto(t)]).then((function(t){var e=K(t,2),n=e[0],r=e[1];r.myId=n._id,tt.addItem(W(r)),rt.close()})).catch((function(t){console.log(t)})).finally((function(){rt.setupDefaultText()}))}));rt.setEventListeners();var ot=new L(".popup_type_update-avatar",(function(t){X.setNewAvatar(t).then((function(t){et.setUserInfo({username:t.name,job:t.about,avatar:t.avatar}),ot.close()})).catch((function(t){console.log(t)})).finally((function(){ot.setupDefaultText()}))}));ot.setEventListeners(),Array.from(document.forms).forEach((function(t){var e=new a($,t),n=t.name;G[n]=e,e.enableValidation()})),J.addEventListener("click",(function(){G.profileForm.resetValidation(),nt.setInputValues(et.getUserInfo()),nt.open()})),H.addEventListener("click",(function(){G.cardForm.resetValidation(),rt.open()})),M.addEventListener("click",(function(){G.updateAvatar.resetValidation(),ot.open()})),Promise.all([X.getUserProfileInfo(),X.getInitialCards()]).then((function(t){var e=K(t,2),n=e[0],r=e[1];r.forEach((function(t){t.myId=n._id})),et.setUserInfo({username:n.name,job:n.about,avatar:n.avatar}),tt.addCardFromArray(r.reverse())})).catch((function(t){console.log(t)}))})();