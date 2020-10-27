const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arrayM) {
  if (typeof arrayM != 'object' || arrayM === null) {return false;}
  let arrN =[];
  let result =[];
for (let i = 0; i < arrayM.length; i++) {
  let x =arrayM[i];
  if (typeof x == 'string') 
  { arrN.push(x)} 
};
if (arrN.length == 0) {return false;};
for (let i = 0; i < arrN.length; i++) {
  let y=arrN[i].replace(/\s/g, '').charAt(0).toUpperCase();
  result.push(y);
  result.sort();
};

return result.join("");
};
