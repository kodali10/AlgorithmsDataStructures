function maxChar(str){
	
	let maxOccured;
	const chars = {};
	let max = 0;
	let maxChar; 
	for(let char of str){
		/*if(!chars[char]){
			chars[char] = 1;
		}else{
			chars[char]++;
		}*/
		!chars[char]? chars[char] = 1 : chars[char]++	
	}
	
	for(let char in chars){
		if(chars[char] > max){
			max = chars[char];
			maxChar = char;
		}
	}
	
	if(max>1){
		return maxChar;
	}else{
		return "All are same";
	}
}

console.log("The max occured charecter: "+maxChar('abcd'));