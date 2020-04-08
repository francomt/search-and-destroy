'use strict';

//Complete this algo

// create an arr to keep track of nodes

// start with head

// if arr includes node, return true (THIS IS A LOOP)

// a while loop, while node.next is not null
// check if node.next is null, if yes, return FALSE (NO A LOOP)

// let node = node.next
// else arr.push(node), return isLoop(list, array, node) (RECURSION)

const isLoop = (linkedlist, currNode = linkedlist.head, arr = []) => {
  if (arr.includes(currNode)) return true;
  if (currNode.next === null) return false;
  arr.push(currNode);
  const nextNode = currNode.next;
  return isLoop(linkedlist, nextNode, arr);
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
