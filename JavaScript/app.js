//var userChoice = prompt("Do you choose rock, paper or scissors?");
//console.log(userChoice);

var computerChoice = Math.random();
console.log(computerChoice);
if(0.33 > computerChoice)
{
    computerChoice = "rock";
}
else if(0.66 > computerChoice)
{
    computerChoice = "paper";
}
else
{
    computerChoice = "scissors";
}
console.log(computerChoice);