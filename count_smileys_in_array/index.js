/*

Count the smiley faces!

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

*/

function countSmileys(arr) {
	let count = 0;
	if (arr.length === 0) {
		return 0;
	}
	for (let str of arr) {
		const smileyWithoutNose =
			(str[0] === ':' || str[0] === ';') &&
			(str[str.length - 1] === ')' || str[str.length - 1] === 'D');
		const nose = str[1] === '-' || str[1] === '~';
		if (str.length === 3) {
			if (smileyWithoutNose && nose) {
				count++;
			}
		}
		if (str.length === 2) {
			if (smileyWithoutNose) {
				count++;
			}
		}
	}
	return count;
}

countSmileys([]);
//0
countSmileys([':D', ':~)', ';~D', ':)']);
//4
countSmileys([':)', ':(', ':D', ':O', ':;']);
//2
countSmileys([';]', ':[', ';*', ':$', ';-D']);
//1
countSmileys([':-)', ';~D', ':-D', ':_D']);
//3
countSmileys([':o)', ';~>', ';)', ':>', ':(', ';>', ';>']);
//1
