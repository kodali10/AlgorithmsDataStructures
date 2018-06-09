	//Method 1
	/*function isPalindrome(str){
	return str.split('').reverse().join('') === str;
	}
	*/
	
	//Method 2
	function isPalindrome(str){
		return str.split('').every((char,i) =>{
			return char === str[str.length-i-1];
		} );
	}
	console.log(isPalindrome('sas'));