'use strict';

(function () {
  const Key = {
    ENTER: {
      keyCode: 13,
      keyName: `Enter`
    },
    ESCAPE: {
      keyCode: 27,
      keyName: `Escape`
    }
  };

  let onEscPress = function (evt, action) {
    if (evt.keyCode === Key.ESCAPE.keyCode) {
      evt.preventDefault();
      action();
    }
  };

  let onEnterPress = function (evt, action) {
    if (evt.keyCode === Key.ENTER.keyCode) {
      action();
    }
  };

  let getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let getRandomFromArray = function (arr) {
    return arr[getRandomInt(0, arr.length - 1)];
  };

  let getShuffledArray = function (arr) {
    let randomComparator = function () {
      return 0.5 - Math.random();
    };
    return arr.slice().sort(randomComparator);
  };

  window.util = {
    onEscPress,
    onEnterPress,
    getRandomInt,
    getRandomFromArray,
    getShuffledArray
  };

})();
