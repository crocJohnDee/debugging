let fruits = ["orange", "apple", "strawberry", "lemon", "grapes"];
console.log(fruits[0]);

// length
console.log(fruits.length);

// converts an array to a string of (comma separated) array values
console.log(fruits.toString());

console.log(typeof fruits);

// sort an array in alphabetical order
console.log(fruits.sort());

// print/get the last element of an array
console.log(fruits[fruits.length - 1]);

// push
fruits.push("Lemon");
console.log(fruits);

// another way to push an element to the array
fruits[fruits.length] = "Melon";
console.log(fruits);

// allot a value at higher index
// fruits[10] = "Watermelon";
// console.log(fruits);

// join
console.log(fruits.join(" % "));

// pop
let popValue = console.log(fruits.pop());
console.log(fruits);


// push 
let pushValue = fruits.push("fhdsjf");
console.log(fruits);
console.log(pushValue);

// shift
console.log(fruits.shift());
console.log(fruits);

// unshift
fruits.unshift("Muskmelon");
console.log(fruits);

// changing elements
fruits[0] = "mango";
console.log(fruits);

// deleting elements
delete fruits[fruits.length-1];
console.log(fruits);

// splice to add elements
fruits.splice(2, 0, "peach", "Kiwi");
console.log(fruits);

// splice to replace elements
fruits.splice(2, 2, "peach", "Kiwi");
console.log(fruits);

// splice to remove elements
fruits.splice(0, 1); 
console.log(fruits);

// slice to create a new array from an old array
let newFruitsArray = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = newFruitsArray.slice(2);
console.log(citrus);
console.log(newFruitsArray);

let varOne = 10;

let varTwo = 10;

if (((varOne >= varTwo) && (120 % 2 === 0)) || (varOne * 260 === 2600)) {
    console.log("Heya!");
    (12 > 2) ? console.log("The condition is true") : console.log("the condition is false");

    let varThree;
    varThree = "1"; 
    if (varThree == true) {
        console.log("Heya is a string");
    }
}

// Heya!
// The condition is true
// Heya is a string

let a = false;
let b = "false";

if (a != b) {
    console.log("Booleans are not equal to strings!");
    
} else {
    console.log("Booleans are equal to strings!");
} 

let time = 21;
let greeting;

if (time < 10) {
    greeting = "Good morning!"
} else if ((time >= 10) && (time < 20)) {
    greeting = "Good day!"
} else {
    greeting = "Good evening!"
}

console.log(greeting);


let myName = "Mariam 65465983795732489";
console.log(myName[9], myName[20]);
console.log(myName.length);

// numbers
let currentYear = 2019;
console.log(currentYear);
console.log(currentYear[3]);
console.log(currentYear.length);

let myNumber = 1234e17;
console.log(myNumber);
// 123400000000000000000

let myNumber1 = 1234e-3;
console.log(myNumber1);
// 1.234

let myNumber2 = 1234e-5;
console.log(myNumber2);
// 0.01234

let newNum = 20;
console.log(newNum * Infinity);
// Infinity

let newNum1 = 20;
console.log(newNum1 * -Infinity);
// -Infinity

// NaN
let country = "Germany";
console.log(country / newNum);
// NaN

// concatenation
let concat = "Hello";
let concat2 = "World";
let concat3 = concat + concat2;
console.log(concat + " " + concat2 + "!");
// Hello World!

// concatenate numbers and strings
let num1 = 20;
let num2 = 20;
let num3 = "hello";
let num4 = num1 + num2 + num3;
console.log(num4);
// 40hello

let num5 = "hello";
let num6 = 20;
let num7 = 20;
let num8 = num5 + num6 + num7;
console.log(num8);
// hello2020

// typeof
console.log(typeof dgfhdjfg7667hg);
// undefined

// boolean
let isDay = true;
console.log(isDay);
console.log(typeof isDay);

console.log(Boolean(`$fgdgud`));

let favColor = null;
console.log(typeof favColor);

let myObject = {
    key: "value",
    hey2: 1234,
    key3: {
        key31: {
            newObject: "hello",
        }
    },
};

console.log(myObject.key3.key31);

console.log(typeof myObject);

console.log(typeof fruits);
// object

fruits = [
    "Apple", 
    "Orange", 
    "Banana", 
    "Melon", 
    "Lemon"
];
console.log(fruits);
console.log(fruits[0]); // Apple
console.log(fruits.length); // 8

let arrayToString = fruits.toString();
console.log(arrayToString);
// Apple,Orange,Banana,Melon,Lemon
console.log(typeof arrayToString);
console.log(arrayToString[3]); //l

let arrNum = [1, 2, 36, 345, true, 6645, false, "wajhdbfj", 8.6, null, "let", 9.0, -4875483];
        // [ -4875483, 1, 2, 345, 6645, 8.6, 9, false, true, 'wajhdbfj' ]
console.log(arrNum.sort());
console.log(arrNum.reverse());

console.log(fruits[fruits.length - 1]); // Lemon

fruits.push("grapes");
console.log(fruits);
// [ 'Apple', 'Orange', 'Banana', 'Melon', 'Lemon', 'grapes' ]
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// join turns an array into a string
let newArrrr = fruits.join("!");
console.log(typeof newArrrr);

console.log(fruits[0]); // Apple
// changing values
fruits[0] = "Cherry";
console.log(fruits);
// [ 'Cherry', 'Orange', 'Banana', 'Melon' ]

// empty spaces
fruits[6] = "Grapes";
console.log(fruits);

// deleting values
delete fruits[fruits.length -1];
console.log(fruits);
