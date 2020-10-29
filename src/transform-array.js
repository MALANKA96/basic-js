
module.exports = function transform(arr) {
   if (Array.isArray(arr) == false) {
     throw 'arr is not an Array';
   } 
 let resultArr =[];
   let nextElement = 0;
 for (let i = 0; i < arr.length; i++) {
  
switch (arr[i]){
case '--discard-next':
nextElement = i+1;
i++;
break;
case '--discard-prev':
if (resultArr.length && nextElement !== i - 1) 
resultArr.pop();
break;
case'--double-next':
if (i < arr.length - 1) resultArr.push(arr[i + 1]);  
break;
case '--double-prev':
if (resultArr.length && nextElement !== i - 1)
resultArr.push(resultArr[resultArr.length-1]);
break;
default: resultArr.push(arr[i]);
}     
 }
 return  resultArr;
};
