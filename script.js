const extendHex = (shortHex) => {
  // write your code here
	let ans = "#";
	for( let i of shortHex){
		let k = i + i;
		ans = ans + k;
	}
	
	return ans;
	
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
