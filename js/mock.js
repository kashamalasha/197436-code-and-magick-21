'use strict';

(function () {

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

  let getRandomName = function () {
    return window.util.getShuffledArray([
      window.util.getRandomFromArray(FIRST_NAMES),
      window.util.getRandomFromArray(SECOND_NAMES)
    ]).join(` `);
  };

  window.mock = {
    getRandomName
  };

})();
