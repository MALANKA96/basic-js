const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(n, s) {
  let result = {
    turns: 0,
    seconds: 0
  }
  let x = Math.pow(2, n)-1;
  let y = Math.floor((x/s)*3600);

  result.turns = x;
  result.seconds = y;

return result;
};
