// This function runs when the button is clicked
function sayHello() {
    alert("Hello from JavaScript! 🚀");
    console.log("Button clicked! This is logged in the console.");
    console.log("Button clicked! This is logged in the console 222.");
    console.log("Hello from feature-hello branch");
    console.log("Hello Welcome to Vamshi");
}

// Some example utility functions
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Testing the functions in console
console.log(capitalize("hello world")); // Hello world
console.log(sumArray([1, 2, 3, 4])); // 10
/*
E:\MURALI\10Days-ReactJS\day2-training\sample-js-project>node script.js
Hello world
10
*/