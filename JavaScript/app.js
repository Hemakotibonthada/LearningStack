// Arithmetic operations
var a = 0;
var b = 2;

var addition = a + b;
var subtraction = a - b;
var multiplication = a * b;
var division = a / b;
var modular = a % b;
var exponentiation = a ** b;
var even = a % 2 === 0;

let firstname="Hemakoti";
if (firstname=="Hemakoti"){
    console.log(`Welcome ${firstname}`);    
}


let color= "green";

for (let i = 0; i < 3; i++) { // Loop should go up to 3 for the 'yellow' case to be considered
    let color; // Declare the color variable
    if (i === 0) {
        color = "red";
        console.log(`Color is ${color}`);
    } else if (i === 1) {
        color = "green";
        console.log(`Color is ${color}`);
    } else if (i === 2) {
        color = "yellow";
        console.log(`Color is ${color}`);
    } else {
        console.log("Please enter a valid color");
    }
    
    // Use a closure to delay the execution of code
    (function(currentColor) {
        setTimeout(() => {
            console.log(`Delayed color: ${currentColor}`);
        }, 5000 * (i + 1)); // Adjust delay based on iteration
    })(color);
}
switch(color){  
    case "red":
        console.log("Please Stop");
        break;
    case "yellow":
        console.log("Please Wait");
        break;
    case "green":
        console.log("Please Go");
        break;
    default:
        console.log("Please Enter Valid Color");
        break;
}
if (color=="red"){
    console.log("Please Stop");
}
else if (color=="yellow"){
    console.log("Please Wait");
}
else if (color=="green"){
    console.log("Please Go");
}
else{
    console.log("Please Enter Valid Color");

}

var resultsDiv = document.getElementById('results');
resultsDiv.innerHTML = `
    <h2>Arithmetic Operations</h2>
    <p>Value of A: ${a}</p>
    <p>Value of B: ${b}</p>
    <p>Addition (a + b): ${addition}</p>
    <p>Subtraction (a - b): ${subtraction}</p>
    <p>Multiplication (a * b): ${multiplication}</p>
    <p>Division (a / b): ${division}</p>
    <p>Modular (a % b): ${modular}</p>
    <p>Exponentiation (a ** b): ${exponentiation}</p>
    <p>Even (a % 2 === 0): ${even}</p>
    <h2>Unary Operators</h2>
    <p>Unary Plus (+a): ${+a}</p>
    <p>Unary Negation (-a): ${-a}</p>
    <p>Increment (a++): ${a++}</p>
    <p>Decrement (a--): ${a--}</p>
    <p>Postfix Increment (a++): ${a++}</p>
    <p>Prefix Increment (++a): ${++a}</p>
    <p>Postfix Decrement (a--): ${a--}</p>
    <p>Prefix Decrement (--a): ${--a}</p>
    <h2>Assignment Operators</h2>
    <p>Assignment (a = b): ${a = b}</p>
    <p>Addition Assignment (a += b)==> (a=a+b): ${a += b}</p>
    <p>Subtraction Assignment (a -= b): ${a -= b}</p>
    <p>Multiplication Assignment (a *= b): ${a *= b}</p>
    <p>Division Assignment (a /= b): ${a /= b}</p>
    <p>Modular Assignment (a %= b): ${a %= b}</p>
    <p>Exponentiation Assignment (a **= b): ${a **= b}</p>
    Let a = 10 and b = 3
     <h2>Comparison Operators</h2>
     <p>Value of A: ${a}</p>
        <p>Value of B: ${b}</p>
    <p>Equal (a == b): ${a == b}</p>
    <p>Not Equal (a != b): ${a != b}</p>
    <p>Strict Equal (a === b): ${a === b}</p>
    <p>Strict Not Equal (a !== b): ${a !== b}</p>
    <p>Greater Than (a > b): ${a > b}</p>
    <p>Greater Than or Equal (a >= b): ${a >= b}</p>
    <p>Less Than (a < b): ${a < b}</p>
    <p>Less Than or Equal (a <= b): ${a <= b}</p>
    <h2>Logical Operators</h2>
    <p>Logical AND (a && b): ${a && b}</p>
    <p>Logical OR (a || b): ${a || b}</p>
    <p>Logical NOT (!a): ${!a}</p>
    <h2>Connditional Tenary Operator  </h2>
    <p>Condition (a > b ? a : b): ${a > b ? a : b}</p>
    <h2>Bitwise Operators</h2>
    <p>Bitwise AND (a & b): ${a & b}</p>
    <p>Bitwise OR (a | b): ${a | b}</p>
    <p>Bitwise XOR (a ^ b): ${a ^ b}</p>
    <p>Bitwise NOT (~a): ${~a}</p>
    <p>Left Shift (a << b): ${a << b}</p>
    <p>Right Shift (a >> b): ${a >> b}</p>
    <p>Zero Fill Right Shift (a >>> b): ${a >>> b}</p>
    <h2>String Operators</h2>
    <p>Concatenation (a + b): ${a + b}</p>
    <p>String Length (a.length): ${a.length}</p>
    <p>String Template Literal: ${a} + ${b} = ${a + b}</p>
    <h2>Other Operators</h2>
    <p>Comma (a, b): ${a, b}</p>
    <p>typeof (typeof a): ${typeof a}</p>
    <p>instanceof (a instanceof Number): ${a instanceof Number}</p>
    <p>in (a in window): ${a in window}</p>
    <p>delete (delete a): ${delete a}</p>
    <p>new (new Number(a)): ${new Number(a)}</p>
    <p>this (this): ${this}</p>
    <p>void (void a): ${void a}</p>


`;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);



////This is For Teja's Place////
