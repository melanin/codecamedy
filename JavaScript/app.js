var getReview = function (movie)
{
    /*if("Toy Story 2" == movie)
    {
        return "Great story. Mean prospector.";
    }
    else if("Finding Nemo" == movie)
    {
        return "Cool animation, and funny turtles.";
    }
    else if("The Lion King" == movie)
    {
        return "Great songs.";
    }
    else
    {
        return "I don't know!";
    }*/
    
    switch(movie)
    {
        case "Toy Story 2":
            return "Great story. Mean prospector.";
            
        case "Finding Nemo":
            return "Cool animation, and funny turtles.";
            
        case "The Lion King":
            return "Great songs.";
            
        default:
            return "I don't know!";
    }
};

console.log(getReview("Toy Story 2"));
console.log(getReview("Finding Nemo"));
console.log(getReview("The Lion King"));
console.log(getReview("Old Boy"));


