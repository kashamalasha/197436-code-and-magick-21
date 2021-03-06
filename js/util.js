'use strict';

const DEBOUNCE_INTERVAL = 500;

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

const onEscPress = function (evt, action) {
  if (evt.keyCode === Key.ESCAPE.keyCode) {
    evt.preventDefault();
    action();
  }
};

const onEnterPress = function (evt, action) {
  if (evt.keyCode === Key.ENTER.keyCode) {
    action();
  }
};

const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFromArray = function (arr) {
  return arr[getRandomInt(0, arr.length - 1)];
};

const getShuffledArray = function (arr) {
  let randomComparator = function () {
    return 0.5 - Math.random();
  };
  return arr.slice().sort(randomComparator);
};

const debounce = function (callback, ...args) {
  let lastTimeout = null;

  return function () {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      callback(...args);
    }, DEBOUNCE_INTERVAL);
  };
};

window.util = {
  onEscPress,
  onEnterPress,
  getRandomInt,
  getRandomFromArray,
  getShuffledArray,
  debounce
};
