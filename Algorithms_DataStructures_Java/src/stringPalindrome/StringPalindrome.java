package stringPalindrome;

public class StringPalindrome{

	public static void main(String[] args) {
		String word = "Kayak";
		char [] wordArr = word.toCharArray();
		int wordArrLength = wordArr.length;
		boolean isPalindrome = true;
		int wordArrMiddle = wordArrLength;
		if(wordArrMiddle/2 != 0){
		wordArrMiddle -= 0.5; 
		}
		for(int i=0;i<wordArrMiddle; i++){
		if(wordArr[i] != wordArr[wordArrLength-1-i]){
		isPalindrome = false;
		break;
		}
		}
		if(isPalindrome){
		System.out.println("The entered string is Palindrome");
		}else{
		System.out.println("The entered string is not Palindrome");

		}

	}

}
