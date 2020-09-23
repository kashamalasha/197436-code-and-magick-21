'use strict';

(function () {

  const PLAYERS_QUANTITY = 4;

  const FIRST_NAMES = [
    `Иван`,
    `Хуан Себастьян`,
    `Мария`,
    `Кристоф`,
    `Виктор`,
    `Юлия`,
    `Люпита`,
    `Вашингтон`
  ];

  const SECOND_NAMES = [
    `да Марья`,
    `Верон`,
    `Мирабелла`,
    `Вальц`,
    `Онопко`,
    `Топольницкая`,
    `Нионго`,
    `Ирвинг`
  ];

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

  const WIZARD_TEMPLATE = document.querySelector(`#similar-wizard-template`)
                          .content
                          .querySelector(`.setup-similar-item`);

  let similarElement = document.querySelector(`.setup-similar`);
  let similarListElement = document.querySelector(`.setup-similar-list`);

  let getRandomName = function () {
    return window.util.getShuffledArray([
      window.util.getRandomFromArray(FIRST_NAMES),
      window.util.getRandomFromArray(SECOND_NAMES)
    ]).join(` `);
  };

  let generateWizards = function (qty) {
    let arr = [];
    for (let i = 0; i < qty; i++) {
      arr.push({
        name: getRandomName(),
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

  let playersArray = generateWizards(PLAYERS_QUANTITY);
  similarListElement.appendChild(renderWizards(playersArray));
  similarElement.appendChild(similarListElement);

  similarElement.classList.remove(`hidden`);

})();
