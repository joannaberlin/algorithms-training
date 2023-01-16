/*

https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

Split Strings

Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the missing
second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str) {
	let result = [];
	if (str === '') {
		return result;
	}
	if (str.length % 2 !== 0) {
		str += '_';
	}
	result = str.split('');

	for (let i = 0; i < result.length; i++) {
		if (i % 2 === 0) {
			result[i] += result[i + 1];
		}
	}
	return result.filter((str) => str.length === 2);
}

solution('abcdef');
//["ab", "cd", "ef"]
solution('abcdefg');
//["ab", "cd", "ef", "g_"]
solution('');
//[]
