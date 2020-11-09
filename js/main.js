'use strict';

let setupDialog = document.querySelector(`.setup`);
let inputUserName = setupDialog.querySelector(`.setup-user-name`);

const onError = function (errorMessage) {
  let node = document.createElement(`div`);
  node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
  node.style.position = `absolute`;
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = `30px`;

  node.textContent = errorMessage;
  document.body.insertAdjacentElement(`afterbegin`, node);
};

const onSuccess = function (arr) {
  window.wizard.receivedWizards = arr;
  window.wizard.updateWizards();
};

window.backend.load(onSuccess, onError);
window.validate.formInput(inputUserName);

window.color.colorize(window.wizard.wizardElements.coat, window.wizard.COAT_COLORS);
window.color.colorize(window.wizard.wizardElements.eyes, window.wizard.EYE_COLORS);
window.color.colorize(window.wizard.wizardElements.fireball, window.wizard.FIREBALL_COLORS);
