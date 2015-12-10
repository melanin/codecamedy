var friends = {};

friends.bill =
{
    firstName: "Bill"
    , lastName: "Gates"
    , number: 12
    , address: ["abcdef", "ghi"]
};
friends.steve =
{
    firstName: "Steve"
    , lastName: "Jobs"
    , number: 25
    , address: ["jklmn", "opq"]
};

var list = function(__list)
{
    for(var prop in __list)
    {
        console.log(prop);
    }
};
var search = function(__name)
{
    for(var prop in friends)
    {
        if(__name === friends[prop].firstName)
        {
            console.log(friends[prop]);
            return friends[prop];
        }
    }
};

list(friends);
search("Steve");