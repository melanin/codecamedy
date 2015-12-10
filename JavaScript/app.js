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
    for(var key in __list)
    {
        console.log(__list[key]);
    }
}
list(friends);