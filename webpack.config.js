const path = require(`path`);

module.exports = {
  entry: [
    "./js/util.js",
    "./js/backend.js",
    "./js/color.js",
    "./js/wizard.js",
    "./js/validate.js",
    "./js/main.js",
    "./js/setup.js",
    "./js/move.js",
    "./js/game.js",
    "./js/stat.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
}
