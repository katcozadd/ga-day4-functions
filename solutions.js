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
		return word === word.split('').reverse('').join('');
};

console.log(checkPalindrome("Radar"));

