'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	// let left = 0;
	// let right = array.length;
	// console.log(left, right)
	// if(!array.length) return false; // base case 1 (trivial)
	
	// if(array.length === 1) { // base case 2 (trivial)
	// 	return array[0] === target;
	// } else if(array.length === 2) { // base case (recursion)
	// 	if(array[left] === target) return true;
	// 	else if(array[right] === target) return true;
	// 	else return false;  
	// } else { // recursive case
	// 	let mp = Math.floor(array.length/2);
	// 	console.log(mp);
	// 	if(array[mp] === target) {
	// 		return true;
	// 	} else {
	// 		target < mp ? right = mp - 1 : left = mp;
	// 		console.log(array.slice(left, right));
	// 		return binarySearch(array.slice(left, right), target);
	// 	}
	// }

	if (array.length < 2){
		return array[0] === target;
	}
	else {
		let mp = Math.floor(array.length/2);
		if (target === mp) return true;
		if (target < mp){
			return binarySearch(array.slice(0, mp), target)
		}
		else {
			return binarySearch(array.slice(mp, array.length), target)
		}
	}
	
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch