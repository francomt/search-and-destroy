'use strict';

// Complete this algo

//return true if target is in array, else return false
//if array is length 1, check if array[0] === target, return accordingly
// else enter recursive call: get array length and split array in half
// if array[halfIndex] === target, return true, else
// check array[halfIndex], if target is less than, go into recursive call on left arr
// if greater than, repeat above on the right array instead of left

const binarySearch = (array, target) => {
  console.log('THIS IS CURRENT ARRAY: ', array);
  console.log('THIS IS TARGET: ', target);
  if (array.length === 1) {
    if (array[0] === target) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }

  let halfLength = Math.floor(array.length / 2);
  if (array[halfLength] === target) {
    console.log('halfindex: ', true);
    return true;
  } else {
    const left = array.slice(0, halfLength);
    const right = array.slice(halfLength);

    if (array[halfLength] < target) {
      return binarySearch(right, target);
    } else {
      return binarySearch(left, target);
    }
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
