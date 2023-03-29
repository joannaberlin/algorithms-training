function XO(str) {
	let countX = 0;
	let countO = 0;
	const strInArr = str.toLowerCase().split('');

	for (let char of strInArr) {
		char === 'x' ? countX++ : false;
		char === 'o' ? countO++ : false;
	}
	return countX === countO;
}

console.log(XO('xoxo'));
//true
console.log(XO('xxOo'));
//true
console.log(XO('Oo'));
//false
