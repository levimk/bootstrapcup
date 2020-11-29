const e = require("express");

let configToUse;
if (process.env.NODE_ENV == 'production') {
  configToUse = './prod';
} else {
  configToUse = './dev';
}
module.exports = require(configToUse);