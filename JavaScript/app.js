var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;

// save Snoopy's age and species into variables
// use dot notation for snoopy's species
var species = snoopy.species;
    
// use bracket notation for snoopy's age
var age = snoopy["age"];

console.log("species : " + species + ", age : " + age);