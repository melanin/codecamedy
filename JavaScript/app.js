// Here is an array of multiples of 8. But is it correct?
var multiplesOfEight = [8,16,24,32,40,58];

var X = 5;
// Test to see if a number from the array is NOT a true
// multiple of eight. Real multiples will return false.
var answer = multiplesOfEight[X] % 8 !== 0;
console.log(answer);