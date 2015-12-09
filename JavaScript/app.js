/*jshint multistr:true */

var text = "MELA blah blah blah blah MELA blah \
blah MELA blah blah blah MELA blah blah blah MELA \
blah blah MELA blah blah blah MELA blah";
var myName = "MELA";
var hits = [];

for(var i=0; i<text.length; i++)
{
    if(myName[0] === text[i])
    {
        for(var j=i; j<myName.length + i; j++)
        {
            hits.push(text[j]);
        }
    }
}

if(0 === hits.length)
{
    console.log("Your name wasn't found!");
}
else
{
    console.log(hits);
}