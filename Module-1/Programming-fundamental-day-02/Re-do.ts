//-- CONDITIONAL & LOOP STATEMENTS
/* Code expression used to tell the computer, which block of code to execute.
- Determines the flow of your computer program.

If Statements:
- Basic foundation of conditional statements.
- Takes a condition (which could result in boolen [true / false]. And, a block of code that executes when the condition's result is true.)
*/

let age: number = 21;
if (age >= /*greater than*/ 17) /*The code is true, then console.log will run.*/{
  console.log ("You can now create an ID card")
}
//The variable age should be greater than or equals to 17, for the printed word to be executed.

/*--ELSE STATEMENT:
- Will act as a backup plan if the 'if' statement is not true. 
- The block of code of an else statement executed when the if is false.*/

let agE: number = 10;
if (agE >= 17) {
  console.log ("You can now create an ID card.")
} else {
  console.log ("wadidaw belom bisa.")
}

/*--ELSE-IF STATEMENT:
- An if-statement combined with an else statement.
- It will act as a backup plan for an if statement, however, it will also need a condition to be fulfilled.
- Example below:*/

let grade: string = "D";

if (grade === "A"){
  console.log ('Excellent Result!')
} else if (grade === "B") {
  console.log ("Great Result!")
} else if (grade === "C") {
  console.log ("Not Bad.")
} else {
  console.log ("F'in Stupid ya wanker!")
}

/* SWITCH-CASE:
The JavaSciprt switch statement is used in decision making.
It evaluates an expression and executes the corresponding body that matches the expression's result.

The syantax of a switch statement is:

switch(variable/expression) {
case value1:
  // body of case 1
  break;

case value2:
  // body of case 2
  break;

case valueN:
  // body of case N
  break;

default:
// body of default
}

- The switch statements evaluates a variable / expression inside parentheses ().
- If the result of the expression is equal to value1:
    it's body of case 1 will be executed.

- If the result of the expression is equal to value2:
    it's body of case 2 will be executed.

- This process goes on. If there's no matching case,
    the default body executes.

Switch Case - Example below: */

const expr: string = "Papayas";
switch (expr) {
  case "Oranges":
    console.log ("Oranges are $0.59 a pound");
    break;
  case "Mangoes":
  case "Papayas":
    console.log ('Mangoes and Papayas are $2.79 a pound');
    break;
  default:
    console.log (`Sorry, we are out of ${expr}`);
}

/*Diff between IF-ELSE & SWITCH STATEMENT:
IF ELSE
- blocks of code are executed depending on the condition in the if statements.
- Used for integer, character, pointer, floating-point type, or boolean type.
- Tests both logical expressions and equality.
- Multiple statements for multiple decisions.
- If the condition is false, then the code block under the else condition is executed.
- Difficult to edit nested if-else statements.
- Based on constraint.
-------------------------------------------------
SWITCH
- Has multiple cases, and the code block corresponding to that case is executed.
- Used for character expressions and integers.
- Tests only equality.
- Single statements for multiple decisions.
- If the condition does not match any of the cases, the default statement is executed.
- Easy to edit.
- Based on user.*/
//---------------------------------------------------//
/*Truthy & Falsy Values:

Used in programming to determine values within a boolean context.
1 is considered true, which means 1 is a truthy value. 0 in boolean context is considered false, which means it is a falsy value.

Falsy:
- "" (empty string)
- 0
- null
- NaN
- undefined

Truthy:
- " " (blank character string)
- [] (empty array)
- {} (empty object)
- 1
- "1" (string)
- "0" (string)
- "false" (string)
- "true (string)*/

/*-- LOGICAL OPERATOR:
&& (AND) Ex: (x < 10 && y > 1) is true
|| (OR) Ex: (x == 5 || y == 5) is false
! (NOT) Ex: !(x==y) is true
One more example below:*/

let car: string = "Mercy"
if (car === "BMW" || car === "TOYOTA") {
  console.log ("This car is awesome.")
} else if (car === "Mercy" || car === "Jeep") {
  console.log ("This is the best")
}

//SHORT-CIRCUITING:
/* A behavior exhibited by logical operators ( && / ||) where the evaluation of the second operand is skipped if the outcome can be determined by ecaluating the first operand alone.

The && Operator:
The && Operator returns the first falsy operand, or the last truthy operand if all operands are truthy. Example:*/

const value: number = 1 //falsy value
const result1: string | number = value && 'Truthy Value';

//Value evaluates to 0, which is a falsy value.
// Since the first operand is falsy, the expression Short-circuits, and the result is 0.


console.log (result1); // Output is 0. Because the value 0 is falsy, and the && Operator will return the FIRST falsy operand, or the LAST truthy operand.

const value1: string = 'Hello';
const result2: string | number = value && 'Truthy Value';

// Value evaluates to a non-empty string, which is truthy.
// Therefore, the second operand 'Truthy Value' is returned, as it's the LAST truthy operand.

console.log (result2)

/* THE || OPERATOR:

The || Operator will returns the FIRST TRUTHY operand, or the LAST falsy operand. if all operands are falsy. Example: */

const name2: string = '';
const displayName: string = name2 || 'Guest';

//It displayed 'Guest' because the value 'name2' is falsy value because of an empty sting ('').
//'Guest' is assigned to dislayName because it is the last falsy operand. 

console.log (displayName)

const name3: string = 'Alice';
const displayName4: string | number = name3 || 'Guest';

// The value of name3 is a truthy value of string.
// Hence why it will print the value name3 because it's the FIRST TRUTHY OPERAND.

console.log (displayName4)

/*-- PSEUDO-CODE IN CONDITIONAL STATEMENT:
Problem:
Define true if number is even!

Hint:
1. Find out how to define a number is even or odd
2. number % (modulus 2 === 0) (the formula, because all odd number can be divide by 2 and don't have any remainder.)

Solutions in Pseudocode:
1. Define a variable and assign value to variable (odd or even.)
const numberToCheck: number = 10
let isEven = ' '; // this variable would handle the final result.

2. define the formula with conditon state (if or else)
and assign the result value into isEven variable.

if (numberToCheck % 2 === 0) {
console.log ('this is an even number)
} else {
console.log ('this is an odd number')}*/
// ----------------------------------------------------

/* LOOP-STATEMENTS:
A sequence of command or instruction that is repeatedly executed until a certain condition is met.

For loop:

for (let i = 0; i < 3; i++) {
console.log ("hello")
}

- The first statement (let i = 0;) is executed once before the execution of the code block. to initialize the iteration variable.

- The second statement defines the condition for executing the code block.

- The third statement is executed every time after the execution of the code block.*/
// -------------------------------------------------------

/*While loop:
- Basically and if conditions that are repeated.
- As longa s the condition is true, the loop will continue.

while (true) {
console.log ("Hello1")
}

This loop will result in an infinte loop. Which means the loop will never stop.

Keep in mind that when using loops, we should ALWAYS set a condition so that the loop will eventually break / stop.

let i: number = 0;

while (i < 3) {
console.log ("hello!");
i++;
}*/

//-- DO-WHILE LOOP:
/* Do while loop is similiar to while loops. The only difference is that it only starts checking the condition after the first code block execution. */

/*let i: number = 5;

while (i < 5) {
  console.log ('hello!');
} do {
  console.log ('hi');
} while (i < 5);*/

/* The while loop will not be executed since the condition is checked before the code block execution, and the condition itself results in a false value.

However, the do while loop will execute at least once, because the condition is checked only after the first code block execution.*/

//-- BREAK
/* A loop exits when it's condition becomes falsy. But we can FORCE the exit at any time using the special BREAK directive.
Example:*/

let sum: number = 0;

while (true) {
let value: number = 1;

if (sum === 5) break;

sum += value;
}

console.log ("sum: ", sum)

//The value of sum becomes '5' when printed, because sum === 5. So the cum will continue to loop with the sum += value until the sum reaches 5. When it hits 5, it will immediately BREAK.

/*-- CONTINUE:
The continue directive is a "lighter version" of break. It doesn't stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).*/

for (let i = 0; i < 5; i++) {
  //If the if is true, it will skip the remaining part of the body.
  if (i === 3) continue;
  console.log (i); // 0, 1 ,2 4.
} 

//---------------------------------

// Exercise 1: Write a code to check whether the number is odd / even

/*let checkNum: number = 100;
let eveN: number = 0;

if (checkNum % 2 === 0)  {
  console.log ('Even Number')
} else {
  console.log ('Odd Number')
}*/

// ------------------------------------------

// Exercise 2: Write a code to check whether the number is prime or not.

/* PSEUDOCODE:
1. Write a variable to contain the number we want to check whether it's prime or not.
2. Create a boolean variable to confirmed whether the number is prime or not.
3. Do a for loop, let i = 2, i < primeNum (2); i++ 
4. Write an if-statement, if 8 % i (2) === 0 (No remainder)
5. Then, the isPrime change go false boolean. We give break; so that the code will be skipped.
6. Give a printed console.log if (isPrime), the first IsPrime (true) then it is a prime number.
7. else, not a prime number

NOTES: The reason why it's using a FOR LOOP STATEMENT, IS SO THAT the primeNum (8), can be each divided by the number 2, and then the next looping number (3), and again, and again.

If it can be divided by number other than 0 and itself, than it's not a prime number.

*/

/*let primeNum: number = 8;
let isPrime: boolean = true;
for (let i = 2; i < primeNum; i++) {
  if (primeNum % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log ("Prime Number")
} else {
  console.log ("Not a Prime Number")
}*/

// ------------------------------------------

// Exercise 3: Find the sum of the numbers 1 to N. Example: 3 / 5 (N)

/* PSEUDOCODE:
1. Create a variable sum and input 0
2. Create a variable N as the number we want to target for the factorial
3. Create a variable i to be the starting point, from (1).
4. Create string variable to be the (+) button in the printed.
5. Use while-loop that if i <= (less than N), sum = suM (0) + i (it will loop until sum is N)
6. exprs += i (to get the string to do loop also) i think so.
7. if statement of (i < (less than) n) the string express will loop the (+) button, but don't use <= (less than or equal) so that the exprs don't loop on the last number.
8. i++ is runned for the looping.
9. Console.log exprs (to print the + sign) and suM to pring the number.*/


/*let suM: number = 0
let n: number = 5
let i: number = 1
let exprs: string = ""

while (i <= n) {
  suM = suM+i
  exprs += i //exprs will print the result loop of i, so the first loop will be 1. Changing the valur i from number to string, thanks to type coercion
  if (i < n) {
    exprs += " + " // And, exprs will also print the + symbol, as long as the i is less than n
  }
  
  i++
}

console.log (`${exprs} = ${suM}`)*/

// ------------------------------------------

/* Exercise 4:
 Write a code to find factorial of a number
PSEUDOCODE:
1. Create a variable a = 6 (number we want to factor)
2. Create a variable u = 1 (giving the boundaries for a so that it did not reduce to - infinity)
3. Create a variable result to multiply result with every number in a while looping (6, 5, 4, etc)
4. The variable result is 1 multiply 6 in the first loop, so the equal is 6.
5. On the next loop, result will become 6, and so it becomes 6 * 5. 
6. On the next loop, result is 6*5 = 30 and multiply it with the next loop in a, which is 4
7. do a-- so that the number a decrease until the number u = 1
8. give an expression variable to make it complete in the printed version. So it printed the process.

--PREVIOUS CONFUSION--
I still don't get why result * a? doesn't it mean that result (1) * (multiply) a (6 / 5 / 4 / etc until one?) But 1 times 6 is 6, and 1 times 5 is 5?
 */



 /*let a: number = 6
 let u: number = 1
 let result: number = 1
 let express: string = ""

 while (a >= u) {
  result = result * a
  express += a
  if (a > u) {
    express += " x "
  }
 a--
}
 
 console.log (`${express} = ${result}`)*/

/* Exercise 5: Fibonacci number: sample = 15
PSEUDOCODE:
1. Create a variable n to determine which number we want to find the fibonacci.
2. create a variable a as the starting point
3. create a variable b for putting the next number in the loop
4. create a variable i as starting point for the loop
5. Use while statement to count while i <= (less than) n (15)
6. after the first loop, stored the number in the next variable.
after it, the loop will go a (previous number = b, b (current number = next))

Actually i still don't get why we use i <= n in the while, why don't we use b? is it because the number inside b will be constantly updated?

and, if let next = a + b, and a = b, isnt the number a & b the same? and b = next denies the next value? which is a + b?

SO AFTER THE CONFUSION:
let next: number = a + b
a = b 
b = next
this is the first loop, the second loop is:
next = a (the old b) + b (the old next)
a = b (the old next)
b = next (the new next)
and the loop will go on-on until it reaches the number N


let n: number = 15
let a : number = 0
let b: number = 1
let i: number = 1

while (i <= n){
  console.log (a)
let next : number = a + b
  a = b 
  b = next
i++
}
console.log (a)
*/
