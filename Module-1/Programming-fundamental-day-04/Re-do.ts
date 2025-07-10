//-- ARRAY & FUNCTION:
/*--ARRAY
A collection of similiar data elements stroed at contiguous memory locations.

It's the simplest data structure where each data element can be accessed directly by only using it's index number.

[A(index 0)], [B(index 1), [C(index2)], etc]

/-----
FOR OF LOOP
For of, doesn't give you access to the number of the current element, just it's value. But, in most cases that's enough, and it's shorter.

Example:

let fruits: string[] = ['Apple', 'Orange', 'Plum'];

Iterates over array elements.
for (let fruit of fruits) {
console.log (fruit);
}

FOR IN LOOP:
Loops through the properties of an object. Will be discussed later.

//----------------------------------//

FUNCTION:

A block of reusable code written to perform a a specific task.

A function is a 'subprogram' that can be called in another code. Like the program itself, a function is composed of a SEQUENCE OF STATEMENTS called the function body.

Values can be passed to a function, and the function will return a value. 

TWO WAYS OF FUNCTION:
A. FUNCTION DECLARATION
Consists of the function keyword, followed by:
- The name of the function
- A list of parameters to the function, enclosed in parantheses and separated by commas.
- The JavaScript statement that define the function, enclosed in curly brackets{}.

EXAMPLE:

function square (number <-(parameters): number (Types)<-) {
return number * number;
}

const x: number = square (4); // x = 16.

<--------------------------------------->
B. FUNCTION EXPRESSION

Function expression is function that is anonymous, it does not have a name. Then assign that anonymous function into a variable.

EXAMPLE:
const square = function (number: number) {
  return number * number;
}
  const x: number = square(4) // x = 16

<----------------------------->
CALLING FUNCTION:
To call a function, just call the function's name & parentheses.

Example:
//Defining a function:
function square (number: number) {
return number * number;
}

//Calling a function:
const x: number = square (4) // x = 16.
<------------------------------->

//FUNCTION HOISTING:
- Function Declaration:
Function declared using function declaration are fully hoisted, so they can be called before being declared.

EXAMPLE:

sayHello(); // Output: Hello, World!

function sayHello() {
console.log ("Hello, World!");
}

- Function Expression:
Function Expression (whether using var, let, or const) only hoist the variable declaration but do not initialize the function.

EXAMPLE: With let or const

console.log (myFunc); //Reference Error: cannot access 'myfunc' before initialization.
let myFunc = function () {
console.log ("Hello.");
};

<---------------------------------->
FUNCTION SCOPE:
Variables defined inside a function CANNOT be accessed from anywhere outside the function.

It's because the variable is defines only in the scope of the function.

However, a function can access all variables and functions defined inside the scope.

EXAMPLE:

//Can't access variable hello in here

function greeting() { <- this parentheses are the scope
const hello: string = "hello!";

//Variable hello only accessible within this scope
return hello;
} <- this parentheses are the scope.

//Can't access variable hello in here (outside the scope)
<-------------------------------------------------------->
PARAMETERS & ARGUMENTS:

An argument is a value passed as input to a function. While a parameter is a named variable passed into a function.

Parameter variables are used to import arguments into functions.
EXAMPLE:
// Name is a parametes:
function greeting(name: string) {
const hello: string = 'hello';
return hello + " " + name;
}

//David is an argument:
console.log (greeting("David"));
<-------------------------------------------------------->
DEFAULT PARAMETER:
In JavaScript, function parameters default to undefined. However, it's often useful to set a different default value. This is where default parameters can help.

Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed. Example below:

//Default value for parameter b is 1
function multiply(a: number, b: number = 1) {
return a * b
}

//If the parameter value is given, it will use the given value
// otherwise, it wil use the default value

console.log (multiply(5, 2)); // 10
console.log (multiply(5)); //5

<---------------------------------------------->
REST PARAMETERS:
The rest parameters allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic function in Javascript.

A function definition's last function can be prefixed with "...", which will cause all remaining (user supplied) parameters to be placed within a standard Javascript array. 

Only the last parameter in a function definition can be a rest parameter. 

EXAMPLE BELOW:

function myFunc (a, b, ...manyMoreArgs) {
console.log ("a", a);
console.log ("b", b);
console.log ("manyMoreArgs", manyMoreArgs);
}

myFunc ("one", "two", "three", "four");
// Output:
a = one
b = two
manyMoreArgs = three, four.

<------------------------------------------------>
NESTED FUNCTION:

A Function can hve one or more inner function. These nested functions are in the scope of the outer function.

Inner function can access variables and parameters of outer function. However, outer function CANNOT ACCESS variables defined inside inner functions.

EXAMPLE BELOW!

function getMessage (firstName: string) {
  function sayHello() {
  return "Hello" + " " + firstName;
  }

  function welcomeMessage() {
  return "Welcome to Purwadhika!";
  }

  return sayHello() + " " + welcomeMessage();
}

const message: string = getMessage("David");
console.log (message);

CLOSURE:
An inner function always has acces to the variables and parameter of it's outer function, even after the outer function has returned.

Example:

function greeting(name; string) {
const defaultMessage: string = "hello";

return function() {
  return defaultMessage + name;
  }
}

const greetingDavid = greeting("David");
console.log (greetingDavid()) // Hello, David!


*/