'use strict';

(function () {

  let setupDialog = document.querySelector(`.setup`);
  let setupOpen = document.querySelector(`.setup-open`);
  let setupClose = setupDialog.querySelector(`.setup-close`);
  let inputUserName = setupDialog.querySelector(`.setup-user-name`);
  let setupForm = setupDialog.querySelector(`.setup-wizard-form`);


  const onPopupEscPress = function (evt) {
    if (document.activeElement !== inputUserName) {
      window.util.onEscPress(evt, closePopup);
    }
  };

  const openPopup = function () {
    setupDialog.classList.remove(`hidden`);

    setupDialog.style.left = ``;
    setupDialog.style.top = ``;

    document.addEventListener(`keydown`, onPopupEscPress);
  };

  const closePopup = function () {
    setupDialog.classList.add(`hidden`);

    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  const onSetupFormSubmit = function (evt) {
    window.backend.save(new FormData(setupForm), closePopup);
    evt.preventDefault();
  };

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, function (evt) {
    window.util.onEnterPress(evt, openPopup);
  });

  setupClose.addEventListener(`click`, function () {
    closePopup();
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    window.util.onEnterPress(evt, closePopup);
  });

  setupForm.addEventListener(`submit`, function (evt) {
    onSetupFormSubmit(evt);
  });

})();
