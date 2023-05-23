import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupCardDelete from '../components/PopupCardDelete.js';
import Api from '../components/Api.js';
import {
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
  const card = new Card (element, templateSelector, popupWithImage.open, popupCardDelete.open, (likeElement, cardId) => {
    if (likeElement.classList.contains('elements__like-button_active')) {
      api.deleteLike(cardId)
      .then((res) => {
        card.toggleLike(res.likes);
      })
      .catch((err) => {
        console.log(err);
    })
    } else {
      api.addLike(cardId)
      .then((res) => {
        card.toggleLike(res.likes);
      })
      .catch((err) => {
        console.log(err);
    })
    }
  });
  return card.generateCard();
}


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '2715081b-0de1-4113-a2a5-4588462954ff',
    'Content-Type': 'application/json'
  }
});

const popupCardDelete = new PopupCardDelete (popupCardDeleteSelector, ({ element, cardId }) => {
  api.deleteCard(cardId)
  .then(() => {
    element.removeCard();
    popupCardDelete.close();
  })
  .catch((err) => {
    console.log(err);
})
  .finally(() => {
    popupCardDelete.setupDefaultText();
  });
}); 
popupCardDelete.setEventListeners();

const popupWithImage = new PopupWithImage (popupImageSelector);
popupWithImage.setEventListeners();

const section = new Section ((data) => {
    section.addItem(createCard(data))
  }, elementsListSelector);

const userInfo = new UserInfo (profileInfoConfig);

const popupProfile = new PopupWithForm (popupProfileSelector, (data) => {
  api.setUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo({ username: res.name, job: res.about, avatar: res.avatar });
      popupProfile.close();
    })
    .catch((err) => {
      console.log(err);
  })
    .finally(() => {
      popupProfile.setupDefaultText();
    });
});
popupProfile.setEventListeners();

const popupAddPhoto = new PopupWithForm (popupAddPhotoSelector, (data) => {
  Promise.all([api.getUserProfileInfo(), api.addPhoto(data)])
  .then(([userData, cardData]) => {
    cardData.myId = userData._id;
    section.addItem(createCard(cardData));
    popupAddPhoto.close();
  })
  .catch((err) => {
    console.log(err);
})
  .finally(() => {
    popupAddPhoto.setupDefaultText();
  });
});
popupAddPhoto.setEventListeners();

const popupUpdateAvatar = new PopupWithForm (popupUpdateAvatarSelector, (data) => {
  api.setNewAvatar(data)
  .then((res) => {
    userInfo.setUserInfo({ username: res.name, job: res.about, avatar: res.avatar });
    popupUpdateAvatar.close();
  })
  .catch((err) => {
    console.log(err);
})
  .finally(() => {
    popupUpdateAvatar.setupDefaultText();
  });
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
});


Promise.all([api.getUserProfileInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    cardData.forEach((item) => {
      item.myId = userData._id;
    })
    userInfo.setUserInfo({ username: userData.name, job: userData.about, avatar: userData.avatar });
    section.addCardFromArray(cardData.reverse());
  })
  .catch((err) => {
    console.log(err);
});
