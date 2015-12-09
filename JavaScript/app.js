var isEven = function(number) {
// Your code goes here!

    if(0 == number % 2)
    {
        return true;
    }
    else if(isNaN(number))
    {
        return "please input number";
    }
    else
    {
        return false;
    }
};

console.log(isEven(100));
console.log(isEven("test"));
console.log(isEven(21));