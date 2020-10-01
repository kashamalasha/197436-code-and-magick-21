'use strict';

(function () {
  const SIMILAR_WIZARD_QUANTITY = 4;

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

  const WIZARD_TEMPLATE = document.querySelector(`#similar-wizard-template`)
                          .content
                          .querySelector(`.setup-similar-item`);

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

  let similarElement = document.querySelector(`.setup-similar`);
  let similarListElement = document.querySelector(`.setup-similar-list`);

  let generateWizards = function (quantity) {
    let arr = [];
    for (let i = 0; i < quantity; i++) {
      arr.push({
        name: window.mock.getRandomName(),
        coatColor: window.util.getRandomFromArray(COAT_COLORS),
        eyeColor: window.util.getRandomFromArray(EYE_COLORS)
      });
    }
    return arr;
  };

  let renderWizard = function (proto) {
    let wizard = WIZARD_TEMPLATE.cloneNode(true);
    let wizardName = wizard.querySelector(`.setup-similar-label`);
    let wizardCoat = wizard.querySelector(`.wizard-coat`);
    let wizardEyes = wizard.querySelector(`.wizard-eyes`);

    wizardName.textContent = proto.name;
    wizardCoat.style.fill = proto.coatColor;
    wizardEyes.style.fill = proto.eyeColor;

    return wizard;
  };

  let renderWizards = function (arr) {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < arr.length; i++) {
      fragment.appendChild(renderWizard(arr[i]));
    }

    return fragment;
  };

  let playersArray = generateWizards(SIMILAR_WIZARD_QUANTITY);
  similarListElement.appendChild(renderWizards(playersArray));
  similarElement.appendChild(similarListElement);

  similarElement.classList.remove(`hidden`);

  window.wizard = {
    SIMILAR_WIZARD_QUANTITY,
    COAT_COLORS,
    EYE_COLORS,
    FIREBALL_COLORS,
    wizardElements
  };

})();
