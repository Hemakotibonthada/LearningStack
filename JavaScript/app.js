// Arithmetic operations
var a = 0;
var b = 2;

var addition = a + b;
var subtraction = a - b;
var multiplication = a * b;
var division = a / b;
var modular = a % b;
var exponentiation = a ** b;
var eveen = a % 2 === 0;

let firstname="Hemakoti";
if (firstname=="Hemakoti"){
    console.log(`Welcome ${firstname}`);    
}
let stri="Enter the string";
console.log(`this is default string ${stri}`);

console.log(`this is Modified with .trim Method string ${stri.trim()}`);


stri=stri.trim();

stri=stri.replace("H","z");

console.log(`this is after replace new string value with replaced with new value:  ${stri}`);

console.log(`this is after replace new string value with replaced with UpperCase:  ${stri.toUpperCase()}`);
console.log(`this is after replace new string value with replaced with LowerCase:  ${stri.toLowerCase()}`);


console.log(`this is a index finding method using indexof:  ${stri.indexOf("oti")}`);


console.log(`this is a MethodChaining Method to add one method to another:  ${stri.toUpperCase().indexOf("OTI")}`);


msg="Hello";
console.log(msg.slice(2));
console.log(msg.slice(1,4));
console.log(msg.slice(-4,-1));
console.log(msg.slice(-4));
console.log(msg.slice(1,-1));
console.log(msg.substring(1,4));
console.log(msg.substring(4,1));
console.log(msg.substring(1,-1));
console.log(msg.substr(1,4));
console.log(msg.substr(1,-1));
console.log(msg.substr(-4,1));
console.log(msg.substr(-4,-1));
console.log(msg.substr(-4));
console.log(msg.substr(1));
console.log(msg.substr(-1));
console.log(msg.substr(1,-1));
console.log(msg.substr(-1,1));
console.log(msg.substr(-1,-1));
console.log(msg.substr(1,1));
console.log(msg.substr(1,0));
console.log(msg.substr(0,1));
console.log(msg.substr(0,0));
console.log(msg.substr(0));
console.log(msg.substr(-1));
console.log(msg.substr(1));




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
color="red";
switch(color){  
    case "red":
        console.log("Please Stop and this is from prompt input!");
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

let something="l";
if (something=="xl"){
    console.log("Extra Large");
}
else if (something=="l"){
    console.log("Large");
}
else if (something=="m"){
    console.log("Medium");
}
else if (something=="s"){
    console.log("Small");
}
else{
    console.log("Please Enter Valid Size");
}

let num = 12;
if ( (num%3 === 0) && ( (num+1 == 15) || (num-1 == 11) ) ) {
console. log ("safe");
}
else {
console. log ("unsafe");
}
let colour = "red";
switch (colour) {
case "red" :
console. log ("stop"); break;
case "yellow" :
console. log ("slow down" ); break;
case "green" :
console. log ("G0");
break;
default :
console. log ("Broken Light");
}

let colours=["red","yellow","green"];

  
alert("This is an alert box");

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}
for (let i=1;i<=20;i++){
    console.log(`10 x ${i} = ${i*10}`);
}


for (let i=1;i<=10;i++){
    console.log(`1024 x ${i} = ${i*1024} `)
}

let n=2;
n=parseInt(n);
for (let i=1;i<=10;i++){
    console.log(`${n} x ${i} = ${n*i}`);
}
let con="yes";
let name="";
while(con=="yes" && name!="quit"){
    name=prompt("Guess my Favorite movie name & if you wanna quit enter 'quit'");
    if (name.toUpperCase()=="Deadpool".toUpperCase()){
        alert("You have guessed it right");
        console.log("You have guessed it right");
        break;
    }
    else{
        alert("You have guessed it wrong");
    }
}
let fruits=["apple","banana","mango","orange","grapes"];
for (let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}
for (fruit of fruits)
{
    console.log(fruit);
}
for (i of "hemakotibonthada"){
    console.log(i);
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
    <p>concept of arrays </p>
    <p>Array: ${colours}</p>
    <p>Array Length: ${colours.length}</p>
    <p>Array Index: ${colours[0]}</p>
    <p>Array Index: ${colours[1]}</p>
    <p>Array Index: ${colours[2]}</p>
    <p>Array Index: ${colours[3]}</p>
    <p>Array Index: ${colours[4].push("pink")}</p>
`;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);