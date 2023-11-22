const extendHex = (shortHex) => {
  // write your code here
	let ans = "#";
	for( let i of shortHex){
		ans = ans + i;
		ans = ans + i;
	}
	
	return ans;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
