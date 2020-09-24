'use strict';

(function () {

  const CLOUD = {
    X: 100,
    Y: 10,
    W: 420,
    H: 270,
    SHADOW_GAP: 10
  };

  const COLOR = {
    WHITE: `#ffffff`,
    GRAY: `rgba(0, 0, 0, 0.7)`,
    BLACK: `#000000`,
    RED: `rgba(255, 0, 0, 1)`
  };

  const TEXT = {
    STYLE: `16px PT Mono`,
    LINE_HEIGHT: 20,
    GAP: 30
  };

  const HISTOGRAM = {
    SIZE: 150,
    WIDTH: 40,
    GAP: 50
  };

  const Message = {
    YOUR_RESULT: `Ура! Вы победили!`,
    RESULTS_TITLE: `Список результатов:`
  };

  let getHistogramColor = function () {
    let saturation = window.util.getRandomInt(0, 100);
    return `hsl(240, ` + saturation + `%, 50%)`;
  };

  let getMaxElement = function (arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  };

  let getPlayerColor = function (name) {
    return (name === `Вы`) ? COLOR.RED : getHistogramColor();
  };

  let renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD.W, CLOUD.H);
  };

  let renderScore = function (ctx, x, name, time, maxTime) {
    let playerScore;
    let playerPosY;
    let histogramPosY = TEXT.LINE_HEIGHT * 5;

    playerScore = Math.floor((HISTOGRAM.SIZE * time) / maxTime);
    playerPosY = histogramPosY + (HISTOGRAM.SIZE - playerScore);

    ctx.fillStyle = COLOR.BLACK;
    ctx.fillText(Math.floor(time), x, playerPosY - (TEXT.LINE_HEIGHT / 2));

    ctx.fillStyle = getPlayerColor(name);
    ctx.fillRect(x, playerPosY, HISTOGRAM.WIDTH, playerScore);

    ctx.fillStyle = COLOR.BLACK;
    ctx.fillText(name, x, histogramPosY + HISTOGRAM.SIZE + TEXT.LINE_HEIGHT);
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD.X + CLOUD.SHADOW_GAP, CLOUD.Y + CLOUD.SHADOW_GAP, COLOR.GRAY);
    renderCloud(ctx, CLOUD.X, CLOUD.Y, COLOR.WHITE);

    ctx.fillStyle = COLOR.BLACK;
    ctx.font = TEXT.STYLE;
    ctx.fillText(Message.YOUR_RESULT, CLOUD.X + TEXT.GAP, CLOUD.Y + TEXT.LINE_HEIGHT * 2);
    ctx.fillText(Message.RESULTS_TITLE, CLOUD.X + TEXT.GAP, CLOUD.Y + TEXT.LINE_HEIGHT * 3);

    let maxTime = getMaxElement(times);
    let posX = CLOUD.X;

    for (let i = 0; i < names.length; i++) {
      posX += HISTOGRAM.GAP;
      renderScore(ctx, posX, names[i], times[i], maxTime);
      posX += HISTOGRAM.WIDTH;
    }
  };

})();
