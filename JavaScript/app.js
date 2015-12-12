function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(age, name, breed)
{
    this.age = age;
    this.name = name;
    this.breed = breed;
}

var navi = new Cat(12, "white");
console.log(navi);

var snoopy = new Dog(30, "snoopy", "what");
console.log(snoopy);