/*
https://www.codewars.com/kata/65013fc50038a68939098dcf/train/javascript

Ava, Mark, Sheila, and Pete are at a party. However, Ava and Sheila are only staying if there are at least 4 people,
Pete is only staying if there's at least 1 person, and Mark is only staying if there are at least 5 people. Therefore, Mark leaves,
which makes Ava and Sheila leave, and Pete is left alone.

Given an array with the preferences of every person at a party for the minimum number of people present, determine how many people will stay.
*/

function partyPeople(party) {
	let attendees = party.length;
	const sortedArray = party.sort((a, b) => b - a);

	for (let attendeeExpectations of sortedArray) {
		if (attendeeExpectations > attendees) {
			attendees -= 1;
		}
	}
	return attendees;
}

partyPeople([4, 5, 4, 1]);
//1
partyPeople([10, 12, 15, 15, 5]);
//0
partyPeople([2, 1, 2, 0]);
//4
partyPeople([0, 0, 0, 0]);
//4
partyPeople([5, 5, 5, 5, 5]);
//5
partyPeople([11, 3, 4, 3, 11, 4, 0, 1, 1, 3]);
//8
