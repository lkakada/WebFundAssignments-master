// this is part 2 of the assignment. Copy/paste the starter code from the platform like seen below 
//and edit the code to make it work.
function printUpTo(x){
    // your code here
    if(x < 0) {
        return false;
    }
    for(var i = 1; i <= x; i++) {
        console.log(i)
    }
}
printUpTo(1000000); // should print all the integers from 1 to 1000000
y = printUpTo(-10); // should return false
console.log(y); // should print false


function printSum(x){
    var sum = 0;
    //your code here
    for(var i = 0; i <= 255; i++) {
        console.log(i);
        sum += i;
    }
    return sum
  }
  y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640


  function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      //your code here
      sum +=x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6

//   Create a function that returns the largest element in a given array.  For example largestElement( [1,30,5,7] ) should return 30.
function largestElement(arr) {
    var maxVal = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if(maxVal < arr[i]){
            maxVal = arr[i];
        }
    }
    return maxVal;
}

var max = largestElement([1,30,5,7]); //should return 30.
console.log(max);
