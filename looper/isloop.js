'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let pointer1 = linkedlist.head
    let pointer2 = linkedlist.head.next
    while (pointer1 && pointer2){
        if (pointer1 === pointer2){
            return true
        } else {
            pointer1 = pointer1.next
            pointer2 = pointer2.next.next
        }
    }
    return false
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop