// 1. Given an array and a value Y, count and print the number of array values greater than Y.
function countAndPrint(arr, y) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > y) {
            console.log(arr[i]);
            count += 1;
        }
    }
    return count;
}
test = countAndPrint([3,6,7,2,1], 1);
console.log(test);

___________________________________________________________________

// 2. Given an array, print the max, min and average values for that array.
function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    var avg = 0;
    for(var i = 0; i < arr.length; i++) {
        max < arr[i] ? max = arr[i] : false;
        min > arr[i] ? min = arr[i] : false;
        sum += arr[i];
    }
    avg = sum / arr.length;
    console.log(`The max: ${max}. The min: ${min}. The average: ${avg}`);
}
maxMinAvg([4,8,9,7,1]);

___________________________________________________________________

// 3. Given an array of numbers, create a function that returns a new array where negative values were replaced
// with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function replaceNegative(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        arr[i] < 0 ? newArr[i] = "Dojo" : newArr.push(arr[i]);
    }
    return newArr;
}
console.log(replaceNegative( [1,2,-3,-5,5]));

___________________________________________________________________
//4. Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening 
// the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
function removeVals(arr,startInx, endInx) {
   var offsetVal = endInx - startInx + 1;
   for(var i = start; i <= offsetVal; i++) {
       arr[i] = arr[i + offsetVal];
   }
   arr.length = arr.length - offsetVal;
   return arr;
}
removeVals([20,30,40,50,60,70],2,4)