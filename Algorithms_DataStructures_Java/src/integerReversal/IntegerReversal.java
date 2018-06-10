//Method to reverse an integer
static long get reversedInt(int num){
		long reversedNum = 0;
		long inputNum = num;
		while(inputNum !=0){
			reversedNum = reversedNum * 10 + inputNum%10;
			inputNum = inputNum/10;
	}
	
	return reversedNum;
}