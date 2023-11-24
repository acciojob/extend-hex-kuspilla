const extendHex = (shortHex) => {
  // write your code here
	shortHex = shortHex.replace("#", "");

  // Make sure the input is a valid short hex code
  if (shortHex.length !== 3 || !/^[0-9a-fA-F]{3}$/.test(shortHex)) {
    console.error("Invalid short hex code. Please provide a valid short hex code with 3 characters.");
    return null;
  }

	
  // Extend the short hex code to the full hex code
  const fullHex = shortHex
    .split("")
    .map(char => char.repeat(2))
    .join("");

  // Add the '#' symbol and return the full hex code
  return `#${fullHex}`;
	
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
