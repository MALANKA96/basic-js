const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
 getLength() {
  return this.arr.length;
},
 addLink(value) {
  this.arr.push(`( ${value} )`)
  return this;
  },
  removeLink(position) {
    if ( position - 1 < 0 || !(typeof position === 'number') || this.getLength() < position  )
     {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position-1 , 1);
    return this;
  },
   reverseChain() {
 this.arr.reverse();
 return this;
  },
 finishChain() {
    let result = this.arr.join('~~');
    delete this.arr;
    return result;
  },
};

module.exports = chainMaker;
