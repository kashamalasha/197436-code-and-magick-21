'use strict';

(function () {

  const setNewColor = function (obj, colors) {
    let newColor = window.util.getRandomFromArray(colors);
    let currentColor = obj.input.value;

    while (newColor === currentColor) {
      newColor = setNewColor(obj, colors);
    }

    return newColor;
  };

  const colorize = function (obj, colors) {
    obj.element.addEventListener(`click`, function () {
      let newColor = setNewColor(obj, colors);
      if (obj.element.tagName.toLowerCase() === `div`) {
        obj.element.style.backgroundColor = newColor;
      } else {
        obj.element.style.fill = newColor;
      }
      obj.input.value = newColor;

      window.wizard.updateWizards();
    });
  };

  window.color = {
    colorize
  };

})();
