var suitcase = {
    shirt: "Hawaiian"
};

//console.log(suitcase.shorts);
if(suitcase.hasOwnProperty("shorts"))
{
    console.log(suitcase.shorts);
}
else
{
    suitcase.shorts = "short short";
    console.log(suitcase.shorts);
}