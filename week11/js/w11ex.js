console.log("Hello");
//create objects - using literal notation

let person1 = {
    firstName : "Nye",
    "last name" : "Wells",
    age : 28,
    lastAccess : new Date(),
    address : {streetNumber: 18, streetName : "alvista Dr", city : "Ottawa"},
    print: function(){(`The name is ${this.firstName} ${this[`last name`]} and rhe age is ${this.age}`)},
    height : 165

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

}