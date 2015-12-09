var newArray =
[
    [ 3, false, "abc" ],
    [ "def", 12, true ],
    [ false, [ 11, "gh" ], 27 ]
];

//console.log(typeof(newArray));

for(var i=0; i<newArray.length; i++)
{
    // console.log(newArray[i]);
    for(var k=0; k<newArray[i].length; k++)
    {
        console.log(newArray[i][k]);
    }
}