//Verbal Questions
//1. What is the difference between a parameter and an argument?
//When initially writing a function, the parameter is the first set of () that you run into for example:
//const myFunction = (*this is the parameter*) => {
//	console.log(lalala);
//}
//The argument is the value that you put into the () when calling the function.

//2. Within a function, what is the difference between return and console.log?
//console.log will only print out what is in the () in the console.
//Return statements will print out what the function evaluates to in the program.

//Palindrome
//Write a function checkPalindrome that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.

const checkPalindrome = (word) => {
		let lowerCase = word.toLowerCase();
		let palindrome = lowerCase.split('').reverse().join('');
		if (lowerCase === palindrome) {
			return true;
		} else {
			return false;
		}		
};

let answer = checkPalindrome("Radar");
console.log(answer);

//Digit Sum
//Write a function sumDigits that accepts a number and returns the sum of its digits.
const sumDigits = (num) => {
	let numString = num.toString().split('');
	let sum = 0;
	for (let i = 0; i < numString.length; i++) {
		sum = Number(numString[i]) + sum;
	}
	return sum;

};

console.log(sumDigits(1234));

//Pythagoras
//Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.
const calculateSide = (sideA, sideB) => {
	let sideCSquared = (sideA * sideA) + (sideB * sideB);
	console.log(sideCSquared);
	return Math.sqrt(sideCSquared);
};

console.log(calculateSide(12, 3));


//Sum Array
//Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. Use a for loop within the function to iterate over the array and sum the contents.
const sumArray = (newArray) => {
	let sum = 0;
	for (let i = 0; i < newArray.length; i++) {
		sum += newArray[i];
	}
	return sum;
};
console.log(sumArray([1, 2, 3, 4, 5, 6]));


//Prime Numbers
//Did not finish this one yet! Will come back to it!!
const checkPrime = () => {
	let num = 0;
	for ( i = 0; i )
}

//Insert Dash
//Write a function insertDash that accepts a number as a parameter and returns a string with a dash inserted between any consecutive odd numbers. There should not be a dash at the end, it goes only between numbers.
const insertDash = (num) => {
	let numString = num.toString().split('');
	for (i = 0; i < numString.length; i++) {
		if (numString[i] % 2 === 1) {
			return (numString[i] + "-");
		} else {
			return numString[i];
		}
	}
};

console.log(insertDash(7454793));




