/*
https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
	let result = [];
	const alphabet = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];
	const textIntoChars = text.split(' ').join('').split('');
	const textUpperCase = textIntoChars.map((char) => char.toUpperCase());

	for (let char of textUpperCase) {
		for (let i = 0; i < alphabet.length; i++) {
			if (char === alphabet[i]) {
				result.push(i + 1);
			}
		}
	}
	return result.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition('The narwhal bacons at midnight.'));
//"20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
