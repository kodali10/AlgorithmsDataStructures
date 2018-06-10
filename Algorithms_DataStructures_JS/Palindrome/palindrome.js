	//Method 1
	/*function isPalindrome(str){
	return str.split('').reverse().join('') === str;
	}
	*/
	
	//Method 2
	function isPalindrome(str){
	//Every function is used to implement the required function on every element of an array.
		return str.split('').every((char,i) =>{
			return char === str[str.length-i-1];
		} );
	}
	console.log(isPalindrome('sas'));