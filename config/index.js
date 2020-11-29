const e = require("express");

let configToUse;
if (process.env.NODE_ENV == 'production') {
  configToUse = './prod';
} else {
  configToUse = './dev';
}
console.log(`Using: ${configToUse}`);
module.exports = require(configToUse);