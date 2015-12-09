var answer = prompt("Would you like something to drink?", "Beverage");

switch(answer) {
  case 'coffee':
    console.log("Americano!!");
    break;
  // Add your code here!
  case "cola":
      console.log("Coke!!!");
      break;
      
    default:
        console.log("....." + answer);
}