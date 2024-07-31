console.log("Hello");
//create objects - using literal notation

let person1 = {
    firstName : "Nye",
    "last name" : "Wells",
    age : 28,
    lastAccess : new Date(),
    address : {streetNumber: 18, streetName : "alvista Dr", city : "Ottawa"},
    print: function(){(`The name is ${this.firstName} ${this[`last name`]} and rhe age is ${this.age}`)},
    height : "165 cm"

};

console.log(person1.firstName); //Nye
console.log(person1["firstName"]);
//console.log(person1."last name");  error
console.log(person1["last name"]);
console.log(person1.age);
person1.age = 49;
console.log(person1.age);
console.log(person1.lastAccess);

console.log(person1.address.city);//Ottawa
person1.print();

console.log(person1.height);

//create objects - using function constructor

function PersonV2(first,last,age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.lastAccess = new Date();
    this.print =  function(){(`The name is ${this.firstName} ${this[`last name`]} 
    and the age is ${this.age}`)};

}

let p1 = new PersonV2('Sam','Tom',34)
let p2 = new PersonV2('Hugh','Jass',60)
let p3 = new PersonV2();

console.log(p1.firstName); //sam
p1.print();
p2.print();
p3.print();

PersonV2.prototype.height = "166 cm"

console.log(p1.height);
console.log(p2.height);
console.log(p3.height);

p2.height = "222 cm"


console.log(p1.height);
console.log(p2.height);
console.log(p3.height);

//create object - using classes

class PersonV3{
    #firstName;
    lastName;
    age;
    constructor (first,last,age){
        this.firstName=first;
        this.lastName=last;
        this.age=age;
    }
    print(){
        console.log(`The name is ${this.firstName} ${this[`last name`]} 
        and the age is ${this.age}`);
        
    }
}

let p4 = new PersonV3("Max","Mutaz",14);
p4.print();
//console.log(p4.#firstName); error

class Student extends PersonV3{
    grade;
    constructor(first,last,age,g){
        super(first,last,age);
        this.grade = g;
    }
}

let s1 = new Student("Didi","Emem",23,88);
s1.print;
console.log(s1.grade);