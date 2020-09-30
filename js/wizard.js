'use strict';

(function () {
  const COAT_COLORS = [
    `rgb(101, 137, 164)`,
    `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`,
    `rgb(215, 210, 55)`,
    `rgb(0, 0, 0)`
  ];

  const EYE_COLORS = [
    `black`,
    `red`,
    `blue`,
    `yellow`,
    `green`
  ];

  const FIREBALL_COLORS = [
    `#ee4830`,
    `#30a8ee`,
    `#5ce6c0`,
    `#e848d5`,
    `#e6e848`
  ];

  let setupDialog = document.querySelector(`.setup`);
  let setupPlayer = setupDialog.querySelector(`.setup-player`);
  let setupWizard = setupPlayer.querySelector(`.setup-wizard`);
  let wizardElement = setupWizard.querySelector(`.wizard`);

  let wizardElements = {
    coat: {
      element: wizardElement.querySelector(`.wizard-coat`),
      input: setupPlayer.querySelector(`input[name="coat-color"]`)
    },
    eyes: {
      element: wizardElement.querySelector(`.wizard-eyes`),
      input: setupPlayer.querySelector(`input[name="eyes-color"]`)
    },
    fireball: {
      element: setupDialog.querySelector(`.setup-fireball-wrap`),
      input: setupPlayer.querySelector(`input[name="fireball-color"]`)
    }
  };

  window.wizard = {
    COAT_COLORS,
    EYE_COLORS,
    FIREBALL_COLORS,
    wizardElements
  };

})();
