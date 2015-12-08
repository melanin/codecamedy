var introduction = "You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'";
console.log(introduction);

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer = prompt("Do you want to race Bieber on stage?");
console.log(userAnswer);

if("yes" === userAnswer)
{
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else
{ // Otherwise...
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}