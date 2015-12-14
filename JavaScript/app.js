function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else
        // return "Wrong password.";
        return 0;           //문자열을 넘기면 에러가 난다
   };
}

var john = new Person('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */
//var wrongBalance = john.askTeller(44);
var myBalance1 = john.askTeller(44);
var myBalance2 = john.askTeller(1234);
console.log(myBalance1);
console.log(myBalance2);