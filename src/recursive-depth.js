module.exports = class DepthCalculator {
  calculateDepth(arr) {
     if (arr.some(i => Array.isArray(i)) == true) { 
       return  1 + this.calculateDepth(arr.flat());
     } else {
       return 1;
      } 
  }
};
