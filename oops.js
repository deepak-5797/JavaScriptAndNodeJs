// object oriented programming in javascript


function Person(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);  //  date object javascript
      this.birtyear = function () {
            return this.dob.getFullYear();
      }
}

// insantiate the object 

const p = new Person('deepak', 'agarwal', '05/12/2000');

console.log(p.dob);
console.log(p);
console.log(p.birtyear());


class Person {

      constructor(firstName, lastName, dob) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = new Date(dob);  //  date object javascript

      }
}

