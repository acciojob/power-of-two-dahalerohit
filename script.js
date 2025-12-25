const isPowerOfTwo = (number) => {
  //your code here
	return num > 0 && (num & (num - 1)) === 0;
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
