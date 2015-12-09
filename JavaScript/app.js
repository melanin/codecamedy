var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while(slaying)
{
    if(youHit)
    {
        console.log("Your Attack");
    }
    else
    {
        console.log("Dragon Attack. You Died!!");
        slaying = false;
    }
    
    slaying = false;
}