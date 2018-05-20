package stringReversal;

public class StringReversal {
	private String str;

	StringReversal(String str) {
		this.str = str;
	}

	// Method 1
	public String reverseStr() {
		return new StringBuilder(str).reverse().toString();
	}
	/*
	 * Method 2 
	 * public String reverseStr() { 
	 * char[] revStrArr = this.str.toCharArray(); 
	 * char[] revString = new char[revStrArr.length]; 
	 * for(int j = 0, i = revStrArr.length - 1; i >= 0; i--, j++) {
	 * revString[j] = revStrArr[i]; 
	 * }
	 * this.str = String.valueOf(revString);
	 * return this.str; 
	 * }
	 */
	/*
	 * Method 3
	 * public String reverseStr() {
	 *  int strLength = this.str.length();
	 *  char[] strCharArr = this.str.toCharArray(); 
	 *  StringBuilder sb = new StringBuilder(); 
	 *  for(int i=strLength-1; i>=0;i--) { 
	 *  sb=sb.append(strCharArr[i]); 
	 *  }
	 * return sb.toString(); 
	 * }
	 */
}
