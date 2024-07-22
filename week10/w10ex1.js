// function declaration

function greeting(){
    console.log("Hello");

}
greeting();

function greeting2(){
    return "Hello";
}

let str = greeting2;

console.log(str);
console.log(greeting2());

function greeting3(name){
    // return "hello " + name;
    // return 'hello ' + name;
    // return `hello` + name;
    return `hello ${name}`;
}
console.log(greeting3("Nye"));
console.log(greeting3(5));
console.log(greeting3());

function greeting4(name='Sam'){
    // return "hello " + name;
    // return 'hello ' + name;
    // return `hello` + name;
    return `hello ${name}`;
}
console.log(greeting4("Nye"));
console.log(greeting4(5));
console.log(greeting4());

function sum(num1,num2){
    sum2=num1+num2;
    return sum2;
}

console.log(sum(3,5));
console.log(sum('3','5'));
console.log(sum('Hi','Nye'));
console.log(sum(3));
console.log(sum(3,5,9));

//function expression
let m = sum();
console.log(m);
console.log(typeof(m));

let f = sum;
console.log(typeof(f));
console.log(f(6,10));
f = 9;
//console.log(f(6,10));

const f2 = function(){
    return "good afternoon";
};
console.log(f2());

//arrow expression
//shortcut
const f3 = ()=>"good afternoon";
console.log(f3());

const sum3 = function(num1,num2){
    sum2=num1+num2;
    return sum2;
}

const sum4 = (num1,num2)=>num1+num2;

console.log(sum3(2,3));
console.log(sum4(2,3));

// var a = prompt("Enter first number"); // enter 11
// var b = prompt("Enter second number"); // enter 12
// var result = a + b;
// console.log("The result is " + result);

// var school = prompt("What is your school?", "Seneca");
// console.log("The school you are attending :\n" + school);
// console.log( parseInt('15') );  // returns 15
// console.log( parseInt("15.99") ); // returns 15
// console.log( parseInt('15*3') ); // returns 15
// console.log( parseInt('Hello') ); // returns NaN


var x = "12.78";
var y = 10;
var z = Number(x) + y;
console.log(z);
console.log("sss = " + String(y));



var str1 = "1234";
var num1 = str1 * 1;
console.log(num1 + "\n" + typeof num1);
var str2 = "1234.5678";
var num2 = +str2; // The Unary + Operator
console.log(num2 + "\n" + typeof num2);

console.log( isNaN("123") ); // false
console.log( isNaN(123) ); // false
console.log( isNaN("123 456 ") ); // true
console.log( isNaN("+123") ); // false
console.log( isNaN("123+") ); // true
console.log( isNaN(" 123 ") ); // false

console.log( isFinite(Infinity) ); // false
console.log( isFinite(NaN) ); // false
console.log( isFinite(-Infinity) ); // false
console.log( isFinite(0) ); // true
console.log( isFinite(2e12) ); // true

var amount = 165.25456;
console.log( amount.toFixed() ); // 165
console.log( amount.toFixed(6) ); // 165.254560
console.log( amount.toFixed(2) ); // 165.25

// Returns a random number between 0 (inclusive) and 1 (exclusive)
Math.random();
// Returns a random number between min (inclusive) and max (exclusive)
Math.random() * (max - min) + min;
// Returns a random integer between min (included) and max (excluded)
Math.floor(Math.random() * (max - min)) + min;
// Returns a random integer between min (included) and max (included)
Math.floor(Math.random() * (max - min + 1)) + min;


var myString = "WEB222";
myString.length // returns 6

myString.charAt(0) // returns 'W'
myString.charAt(1) // returns 'E'
myString.charAt(2) // returns "B"
myString.charAt(3) // returns '1'
myString.charAt(4) // returns '2
myString.charAt(5) // returns "3"
myString.charAt(6) // returns ""

var myString = "AZaz09";
console.log( myString.charCodeAt(0) ); // returns 65
console.log( myString.charCodeAt(1) ); // returns 90
console.log( myString.charCodeAt(2) ); // returns 97
console.log( myString.charCodeAt(3) ); // returns 122
console.log( myString.charCodeAt(4) ); // returns 48
console.log( myString.charCodeAt(5) ); // returns 57
console.log( myString.charCodeAt(6) ); // returns NaN

var myString0 = "My courses are: ";
var myString1 = "WEB222";
var myString2 = "OOP222";
myString0 = myString0.concat(myString1, " & ", myString2);
console.log(myString0); // My courses are: WEB222 & OOP244

var myString = "WEB222";
console.log( myString.indexOf("W") ); // 0
console.log( myString.indexOf("EB") ); // 1
console.log( myString.indexOf('2') ); // 3
console.log( myString.indexOf('b2') ); // -1
console.log( myString.indexOf('3') ); // -1

var myString = "WEB222";
alert( myString.lastIndexOf("W") ); // returns 0
alert( myString.lastIndexOf("WEB") ); // returns 0
alert( myString.lastIndexOf('2') ); // returns 5
alert( myString.lastIndexOf('22') ); // returns 4
alert( myString.lastIndexOf('3') ); // returns -1

var myString = "WEB 222";
var myArray1 = myString.split(' ');
myArray1[0] // element 0 returns "WEB"
myArray1[1] // element 1 returns "222"

var myString = "WEB 222";
var myArray2 = myString.split('2');

myArray2[0] // element 0 returns "WEB "
myArray2[1] // element 1 returns "" (empty string)
myArray2[2] // element 2 returns "" (empty string)
myArray2[3] // element 3 returns "" (empty string)


var myArray3 = myString.split('22'); // split on 22 will return the following:
myArray3[0] // element 0 returns "WEB "
myArray3[1] // element 1 returns "2"

var myString = "WEB222";
console.log( myString.substring(1,4) ); // "EB2"
console.log( myString.substring(4,4) ); // ""
console.log( myString.substring(4,2) ); // "B2"
console.log( myString.substring(-4,4) ); // "WEB2"
console.log( myString.substring(0,9) ); // "WEB222"
console.log( myString.substring(4) ); // "22"

var myString = "Seneca";
console.log( myString.toUpperCase() );
console.log( myString ); // value not changed
myString = myString.toUpperCase();
console.log( myString ); // value changed

var myString = "Seneca";
console.log( myString.toUpperCase() );
console.log( myString ); // value not changed
myString = myString.toUpperCase();
console.log( myString ); // value changed

var myString = "WEB222";
console.log( myString.length ); // 6
console.log( myString.toLowerCase() ); // web222
console.log( myString );

var myString = " WEB 222 ";
console.log( myString.length ); // 14
myString = myString.trim();
console.log( myString ); // WEB 222
console.log( myString.length ); // 7

String.prototype.reverse = function () {
    var rev = '';
    for (var i = this.length - 1; i >= 0; i--)
    rev += this[i]; // the string
    return rev;
    };
    var myString = "WEB222";
    console.log( myString.reverse() ); // 222BEW

    var myAarray1 = [];
var myAarray2 = [11, 15, 13, "blue", 24, 35.05];
var myAarray3 = new Array();
myAarray3 [2] = "Green";
console.log( myAarray1.length ); // 0
console.log( myAarray2.length ); // 6
console.log( myAarray3.length ); // 3

var colors = ["Red", "Green", "Blue", "White", "Black"];
var last = colors.pop();
var first = colors.shift();
console.log(colors); // [ "Green", "Blue", "White" ]
console.log(last); // Black
console.log(first); // Red

var colors = ["Red", "Green", "Blue"];
colors.push("Pink");
console.log(colors); // [ "Red", "Green", "Blue", "Pink" 

var array1 = ["Red", "Green", "Blue"];
var array2 = [1, 2, 3, "Yellow"];
var newArray = array1.concat(array2);
console.log(newArray); // [ "Red", "Green", "Blue", 1, 2, 3, "Yellow" ]


var myArray = ["Red", "Green", "Blue", "Yellow"];
console.log( myArray ); // ["Red", "Green", "Blue", "Yellow"]
console.log( myArray.join() ); // "Red,Green,Blue,Yellow"
console.log( myArray.join(' ') ); // "Green Blue Yellow"
console.log( myArray.join("&") ); // "Red&Green&Blue&Yellow"

var myArray = ["Red", "Green", "Blue", "Yellow"];
console.log( myArray ); // [ "Red", "Green", "Blue", "Yellow" ]
myArray = myArray.reverse();
console.log( myArray ); // [ "Yellow", "Blue", "Green", "Red" ]

var array1 = ["Red", 2, "Green", "15", "Blue", 101, "Yellow"];
var array2 = [99, 2, 38, 15, 66, 101, 200];
console.log( array1.sort() ); // [101, "15", 2, "Blue", "Green", "Red", "Yellow"]
console.log( array2.sort() ); // [101, 15, 2, 200, 38, 66, 99]

var colors = ["Red", "Green", "Blue", "Yellow", "White"];
var subclrs = colors.slice(1, 3)
console.log( colors ); // [ "Red", "Green", "Blue", "Yellow", "White" ]
console.log( subclrs ); // [ "Green", "Blue" ]

var i, len;
var colors = ["Red", "Green", "Blue", "Yellow", "White"];
for (i = 0, len = colors.length; i < len; i++) {
console.log(i + ": " + colors[i]);
}

function myFunction(item, index) {
    console.log(index + ": " + item);
    }
    var colors = ["Red", "Green", "Blue", "Yellow", "White"];
    colors.forEach(myFunction);