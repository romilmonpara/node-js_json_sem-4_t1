// Example of a JSON object with different data types
var a = {
    "name": "ABC",
    "age": 19,
    "ispass": true,
    "address": {
        "City": "Ahmedabad",
        "zip": 380015
    },
    "years": null
};

// Using JSON.stringify() to convert the object to a JSON string
console.log("Using JSON.stringify(a):");
console.log(JSON.stringify(a)); 
/* 
Output:
{"name":"ABC","age":19,"ispass":true,"address":{"City":"Ahmedabad","zip":380015},"years":null}
*/

// Using JSON.parse() (Error in original code because a is not a JSON string yet)
console.log("\nUsing JSON.parse(a):");
try {
    console.log(JSON.parse(a));  // This will throw an error because 'a' is already an object, not a string.
} catch (error) {
    console.log("Error:", error.message);
}

// Using JSON.stringify() with another object example
let obj = JSON.stringify({var1: "LJ", var2: "University"});
console.log("\nUsing JSON.stringify() with a different object:");
console.log("Using Stringify: ", obj); 
/* 
Output:
{"var1":"LJ","var2":"University"}
*/

// Using JSON.parse() to convert a string back to an object
let jsonString = '{"city":"Ahmedabad","zip":"380015"}';
let parsedObj = JSON.parse(jsonString);
console.log("\nUsing JSON.parse() to parse a JSON string:");
console.log(parsedObj); 
/* 
Output:
{ city: 'Ahmedabad', zip: '380015' }
*/

// Using JSON.stringify() to convert the parsed object back to a string
let stringifiedObj = JSON.stringify(parsedObj);
console.log("\nUsing JSON.stringify() to convert the object back to a string:");
console.log(stringifiedObj); 
/* 
Output:
{"city":"Ahmedabad","zip":"380015"}
*/

