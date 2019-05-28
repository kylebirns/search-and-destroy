'use strict';

// Complete this algo
const minJumps = arr => {
    let jumpArr = arr.map(elem => Infinity)
    jumpArr[0] = 0
    for (let i = 1; i < jumpArr.length; i++){
        for (let j = 0; j < arr[i - 1]; j++){
            jumpArr[i + j] = Math.min(jumpArr[i - 1] + 1, jumpArr[i + j])
        }
    }
    return jumpArr[arr.length - 1]
};

module.exports = minJumps
