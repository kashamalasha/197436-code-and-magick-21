'use strict';

(function () {

  let setupDialog = document.querySelector(`.setup`);
  let setupOpen = document.querySelector(`.setup-open`);
  let setupClose = setupDialog.querySelector(`.setup-close`);
  let inputUserName = setupDialog.querySelector(`.setup-user-name`);

  let onPopupEscPress = function (evt) {
    if (document.activeElement !== inputUserName) {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  let openPopup = function () {
    setupDialog.classList.remove(`hidden`);

    setupDialog.style.left = ``;
    setupDialog.style.top = ``;

    document.addEventListener(`keydown`, onPopupEscPress);
  };

  let closePopup = function () {
    setupDialog.classList.add(`hidden`);

    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener(`click`, function () {
    closePopup();
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

})();
