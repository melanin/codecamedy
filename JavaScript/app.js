// Our Person constructor
function Person(__name, __age)
{
    this.name = __name;
    this.age = __age;
};

// Now we can make an array of people
var family = [];
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);

// loop through our new array
for(var name in family)
{    
    console.log(family[name]);
}