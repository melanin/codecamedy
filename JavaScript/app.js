// Write your code below!

var favorite = prompt("I like...", "Favorite");

switch(favorite)
{
    case "game":
        console.log("game is exciting!!");
        break;
        
    case "tennis":
        console.log("T! E! N! N! I! S!");
        break;
        
    case "movie":
        console.log("I'm your father.");
        break;
        
    default:
        console.log("I like ... ... ... ... ... ... " + favorite);
}