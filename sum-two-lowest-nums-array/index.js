/*
https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

Create a function that returns the sum of the two lowest positive numbers given an array
of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {
	const sortedArray = numbers.sort((a, b) => a - b);
	return sortedArray[0] + sortedArray[1];
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]);
//13
sumTwoSmallestNumbers([15, 28, 4, 2, 43]);
//6
sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]);
//3453455
