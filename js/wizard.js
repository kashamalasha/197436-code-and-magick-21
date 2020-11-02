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

  const renderWizard = function (proto) {
    let wizard = WIZARD_TEMPLATE.cloneNode(true);
    let wizardName = wizard.querySelector(`.setup-similar-label`);
    let wizardCoat = wizard.querySelector(`.wizard-coat`);
    let wizardEyes = wizard.querySelector(`.wizard-eyes`);

    wizardName.textContent = proto.name;
    wizardCoat.style.fill = proto.colorCoat;
    wizardEyes.style.fill = proto.colorEyes;

    return wizard;
  };

  const renderWizards = function (arr) {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < arr.length; i++) {
      fragment.appendChild(renderWizard(arr[i]));
    }

    return fragment;
  };

  const getRank = function (wizard) {
    let coatColor = wizardElements.coat.input.value;
    let eyesColor = wizardElements.eyes.input.value;
    let rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  const namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  const updateWizards = function (arr) {
    let unsortedWizards = arr;

    let sortedWizards = unsortedWizards.slice().sort(function (left, right) {
      let rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });

    let similarWizards = sortedWizards.slice(0, SIMILAR_WIZARD_QUANTITY);

    if (similarListElement.childElementCount > 0) {
      similarListElement.innerHTML = ``;
    }

    similarListElement.appendChild(renderWizards(similarWizards));
    similarElement.appendChild(similarListElement);
    similarElement.classList.remove(`hidden`);
  };

  window.wizard = {
    updateWizards,
    COAT_COLORS,
    EYE_COLORS,
    FIREBALL_COLORS,
    wizardElements
  };

})();
