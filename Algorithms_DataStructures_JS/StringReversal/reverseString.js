
/*Method 1
function reverseString(str){
return str.split('').reverse().join('');
}
console.log(reverseString('Hello'));
*/
/* Method 2
function reverseString(str){
  let reversed = '';
  for(let chars of str){
    reversed = chars+reversed;
  }
  return reversed;
}
console.log(reverseString('Hello'));
*/
//Method 3
function reverseString(str){
//The reduce() method applies a function against an accumulator and each element in the array
//(from left to right) to reduce it to a single value
  return str.split('').reduce((reversed, char) => char+reversed, '');
}
console.log(reverseString('Hello'));
