function reverseInteger(integer){
 const reversed = parseInt(integer.toString().split('').reverse().join(''));
 /*if(integer<0){
   return reversed * -1;
 }else{
  return reversed;
}*/
  //Math.sign() function return '-1' if passed number is -ve or '1' if passed
  //is +ve
return reversed * Math.sign(integer);
}

console.log(reverseString(-322167));