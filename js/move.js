'use strict';

let setupDialog = document.querySelector(`.setup`);
let dialogHandle = setupDialog.querySelector(`.upload`);

dialogHandle.addEventListener(`mousedown`, function (evt) {
  evt.preventDefault();

  let startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  let isDragged = false;

  const onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    isDragged = true;

    let shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupDialog.style.top = (setupDialog.offsetTop - shift.y) + `px`;
    setupDialog.style.left = (setupDialog.offsetLeft - shift.x) + `px`;
  };

  const onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener(`mousemove`, onMouseMove);
    document.removeEventListener(`mouseup`, onMouseUp);

    if (isDragged) {
      let onClickPreventDefault = function (clickEvt) {
        clickEvt.preventDefault();
        dialogHandle.removeEventListener(`click`, onClickPreventDefault);
      };
      dialogHandle.addEventListener(`click`, onClickPreventDefault);
    }
  };

  document.addEventListener(`mousemove`, onMouseMove);
  document.addEventListener(`mouseup`, onMouseUp);
});
