var unSortedArr = [2, 3, 2, 5, 4, 5, 5, 5, 5, 9, 6, 8, 8, 7];
var sum = 10;
var diff = 4;

unSortedArr = [...new Set(unSortedArr)];

// console.log(bubbleSort(unSortedArr, sum));

// function bubbleSort(arr, sum) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == sum) {
//                 res.push([arr[i], arr[j]]);
//             }
//         }
//     }
//     return res;
// }


function twoSum(arr, target) {
    let map = {};

    let results = [];
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] != undefined) {
            results.push([map[arr[i]], arr[i]]);
        } else {
            map[target - arr[i]] = arr[i];
        }
    }
    return results;
}

console.log(twoSum(unSortedArr, sum));

function twoDiff(arr, target) {
    let map = {};

    let results = [];
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] != undefined) {
            results.push([map[arr[i]], arr[i]]);
        } else {
            map[target + arr[i]] = arr[i];
        }
    }
    return results;
}

console.log(twoDiff(unSortedArr, diff));