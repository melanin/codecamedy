var user = prompt("?", "??").toUpperCase();
//var user = prompt("?", "??").toLowerCase();
console.log(user);

switch(user)
{
    case "BANANA":
        //console.log("반하나");
        var target = prompt("누규").toLowerCase();
        var really = prompt("진짜(Y / N)?").toLowerCase();
        if("you" == target && "y" == really)
        {
            console.log("나한테 반하나");
        }
        else
        {
            console.log("어쩌라고");
        }
        break;
        
    case "APPLE":
        //console.log("사과하나");
        var target = prompt("누규").toLowerCase();
        var really = prompt("진짜(Y / N)?").toLowerCase();
        if("you" == target || "y" == really)
        {
            console.log("받아주마");
        }
        else
        {
            console.log("어쩔");
        }
        break;
        
    case "ORANGE":
        console.log("오륀지");
        break;
        
    default:
        console.log("그럽디까");
}