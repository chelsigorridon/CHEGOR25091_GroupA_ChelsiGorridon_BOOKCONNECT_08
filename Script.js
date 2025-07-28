// Arrays are compound data types meaning they can store multiple values 

const arr = [1, 2, 3];

// Add an element to the end of an array 

arr.push("Hello");
console.log(arr);  [1, 2, 3, 'Hello']

//Remove an element from the end 

arr.pop();
console.log(arr); [1, 2, 3,]

//Add an element to the start of an array 

arr.unshift("Hello");
console.log(arr); ['Hello', 1, 2, 3]

// Remove an element from the start 

arr.shift();
console.log(arr); [1, 2, 3]

//Concatenate (Join together) 2 or more arrays 

const arr2 = [4, 5, 6];
let arr3 = arr.concat(arr2);
console.log(arr3); Array(6) [1, 2, 3, 4, 5, 6]

//Concat 3 arrays 

const arr4 = arr.concat(arr2, arr3);
console.log(arr4); array (12) [1, 2, 3, 4, 5, 6]

//Get the length of an array 
console.log(arr3.length);  6 

// Flatten array 

const multiarr = [
    [1, 2],
    [3, 4],
    [5, 6],
];
console.log(multiarr.flat()); Array (6) [1, 2, 3, 4, 5, 6]

// Slice array to get part of it 
console.log(arr4.slice(4)); // Sliced from the 5th element 
{

}

// Looping through arrays 

let arr = [1, 2, 3, 4]

//Foreach Method Runs 1 time for each element in the array 

arr.forEach((element) => {
    console.log(element);
}); 

//map method also runs 1 time for each element but also returns a 
// new array with values mapped from the original array 

const newArray = arr.map((element) => {
    return element =5;
});

//Accessing Array members - remember arrays are zero indexed 
console.log(arr[0]); // 1
console.log(arr[2]); // 3
console.log(arr[5]); // undefined 

// Obkects are also compound data types but instead of storing only 
//Values  They store key-value pairs 

let obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "100",
    key5: [1, 2]
    key6: {
        subKey1: "subValue1",
    }

}

//Accessing object values 
console.log(obj["key1"]);
console.log(obj.key1); 

//Accessing all keys 
console.log(Object.keys(obj));

//Accessing all Values 
console.log(Object.values(obj));

import {authors, genres, books} from "../data.mjs";

const bookConnectData = [authors, genres, books];
console.log(bookConnectData);

//Now we wants to access all the author names in the dataset 
// First we need to access the 'Authors object. 

let authorObject = bookonnectData[0];

// Next wem want all of the names which are values in the object 

let values = Object.values(authorsObject);
console.log(values);

const x = 5; 
const y = 5;

console.log(x === y);

const arr1 = [1, 2];
const arr2 = [1, 2];

console.log(arr1 === arr2);

const arr3 = arr1;
arr3.push("Hello");
console.log(arr1);

//how to copy arr1 ?

const arr4 = [...arr1];
arr4.push("goodbye");
console.log(arr1);

//Multi-dimensional arrays 

const multiarray = [1, 2, 3, [1, 2, 3]];
const arr5 = multiarray;
arr5[3].push("Goodbye");
console.log(multiarray);

//How to do a deep copy then ?

const clone = JSON.parse(JSON.stringify(multiarray));
clone[3].push("Goodafternoon");
console.log(multiarray);




