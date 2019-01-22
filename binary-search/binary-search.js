'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let left = 0;
	let right = array.length-1;
	if(!array.length) return false; // base case 1 (trivial)
	if(array.length === 1) { // base case 2 (trivial)
		return array[0] === target;
	} else if(array.length === 2) { // base case (recursion)
		if(array[left] === target) return true;
		else if(array[right] === target) return true;
		else return false;  
	} else { // recursive case
		let mp = Math.floor(array.length/2);
		if(array[mp] === target) {
			return true;
		} else {
			target < mp ? right = mp-1 : left = mp + 1;
			return binarySearch(array.slice(left, right), target);
		}
	}
	
};

let tArr = [0,1,2];
/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch