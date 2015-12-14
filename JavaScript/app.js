function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

// create your Person 
var john = new Person("John", "Smith", 30);
console.log(john.firstname);
console.log(john.lastname);
console.log(john.age);

// try to print his bankBalance
console.log(john.bankBalance);