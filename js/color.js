'use strict';

(function () {

  const REGEX_RGB = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/i;
  const REGEX_HEX = /^#([0-9A-F]{3}){1,2}$/i;

  const Color = {
    BLACK: {
      rgb: `rgb(0, 0, 0)`
    },
    RED: {
      rgb: `rgb(255, 0, 0)`
    },
    BLUE: {
      rgb: `rgb(0, 0, 255)`
    },
    YELLOW: {
      rgb: `rgb(255, 255, 0)`
    },
    GREEN: {
      rgb: `rgb(0, 128, 0)`
    },
    fromId(id) {
      return this[id.toUpperCase()];
    }
  };

  let hexToRGB = function (hex) {
    let r = `0x` + hex[1] + hex[2];
    let g = `0x` + hex[3] + hex[4];
    let b = `0x` + hex[5] + hex[6];

    return `rgb(` + +r + `, ` + +g + `, ` + +b + `)`;
  };

  let getCurrentColor = function (element) {
    if (element.tagName.toLowerCase() === `div`) {
      return window.getComputedStyle(element).backgroundColor;
    } else {
      return window.getComputedStyle(element).fill;
    }
  };

  let setNewColor = function (element, colors) {
    let newColor = window.util.getRandomFromArray(colors);
    let isSimilar = false;
    let currentColor = getCurrentColor(element);

    if (REGEX_HEX.test(newColor)) {
      isSimilar = (currentColor === hexToRGB(newColor));
    } else if (!REGEX_RGB.test(newColor)) {
      isSimilar = (currentColor === Color.fromId(newColor).rgb);
    } else {
      isSimilar = (currentColor === newColor);
    }

    while (isSimilar) {
      newColor = setNewColor(element, colors);
      isSimilar = false;
    }

    return newColor;
  };

  let colorize = function (obj, colors) {
    obj.element.addEventListener(`click`, function () {
      let newColor = setNewColor(obj.element, colors);
      if (obj.element.tagName.toLowerCase() === `div`) {
        obj.element.style.backgroundColor = newColor;
      } else {
        obj.element.style.fill = newColor;
      }
      obj.input.value = newColor;
    });
  };

  window.color = {
    colorize
  };

})();
