// Declare your variables here!

var tired = false;
var bored = true;

var nap = function() {
  // Add your if/else statement here!
  if(tired || bored)
  {
      return true;
  }
  else
  {
      return false;
  }
};

console.log(nap());