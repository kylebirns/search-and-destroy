'use strict';

// Complete this algo
const binarySearch = (array, target) => {

	if (array.length < 2){
		return array[0] === target;
	}
	else {
		let mp = Math.floor(array.length / 2);
		if (target === array[mp]) return true;
		if (target < array[mp]){
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