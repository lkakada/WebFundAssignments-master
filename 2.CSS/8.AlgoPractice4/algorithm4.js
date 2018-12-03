// Challenge 1.
// Given an array and a value Y, count and print the number of array values greater than Y.
function printNumber(arr, y) {
    var count = 0;
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > y) {
            newArr.push(arr[i]);
            count++;
        }
    }
    console.log(`The values that greater than ${y} are ${newArr} and the total is ${count}`);
}
printNumber([3,4,7,8,19], 3);

// Challenge 2. 
// Given an array, print the max, min and average values for that array.
function printMaxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var avg, total = 0;
    for(var i=0; i<arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
        if(min > arr[i]) {
            min = arr[i];
        }
        total += arr[i];
        avg = total / arr.length;
    }

    console.log(`MAX: ${max}, MIN: ${min}, AVG: ${avg.toFixed(2)}`);
}

printMaxMinAvg([3,6,1,8,4,9]);

// Challenge 3.
// Given an array of numbers, create a function that returns a new array where negative 
// values were replaced with the string ‘Dojo’. For example, 
// replaceNegatives([1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function replaceNegatives(arr) {
    var newArr = arr;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            newArr[i] = "Dojo";
        }
    }
    return newArr;
}
console.log(replaceNegatives([1,2,-3,-5,5]));

//Challeng 4.
// Given array, and indices start and end, remove values in that index range, working in-place
// (hence shortening the array).For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
function removeVals(arr, startingIdx, endingIdx) {
    arr.splice(startingIdx, endingIdx - 1);
    return arr;
}
console.log(removeVals([20,30,40,50,60,70],2,4));
console.log(removeVals([20,30,40,50,60,70],2,2));