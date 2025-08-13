console.log ('hello world');

let message; // Create (declare) a variable.

message = 'hello'; // Store data types, in this case is a string by using an assignment (=) operator.

console.log (message)

/* VARIABLES DECLARATION:
Var: Global variables (no longer being used.)
let: replace/changeable variables.
const: Cannot be redeclared / changed / updated.

--TWO TYPES OF DATA:
PRIMITIVE:
- String
- Number & BigIntegers
- Boolean (true or false)
- Null (Represent the intentional absence of any object value)
- Undefined (variable that has not been assigned a value has the value undefined.)

NON-PRIMITIVE:
- Object (Is an entity having properties and methods (keyed collection)-> will be explained later.)
- Array (Used to store more than one element under a single variable -> Will be explained in the next session)
*/

/*-- TEMPLATE LITERALS:
- Allows you to use strings or embedded expressions in the form of a string.
- enclosed using backtick (``) instead of single ('') or double ("") quotes.

Template literals FUNCTION:
- A multi-line string: A string that can span multiple lines.
- String formatting: Ability to subtitute part of the string for the values of variables or expression.
- HTML escaping: transform a string so that it's safe to include in HTML.

Example:*/

let name1: string = "Figo"

console.log (`My name is ${name1}.`)


//-- DATE DATA TYPES:
/* It stores the date, time, and provides methods for date/time management (examples below).*/

// Shows current date/time:
let now: Date = new Date ();

//0 means 01.01.1970 UTC + 0
let jan01_1970: Date = new Date (0);

//Add 24 hours:
let jan02_1970: Date = new Date (24 * 3600 * 1000)
console.log (jan02_1970)
//If i just want to write the exact time, day and data, just use this:
let date: Date = new Date ("2024-01-23");
console.log (date)

/*DATE NOTES:
24 means how many hour in a day 1x24
3600 means how many seconds in a day
1000 mean how many milisecond in a second.

So, if i want to change it into 2 days (jan 03): just used:
48 * 3600 * 1000

Or, if i want it to be next week, i just need to add the value of week, which is 7 days:
7 * 24 * 3600 * 1000

If 5 days, just do it like this:
5*24*3600*1000

--THIS HAPPENED BECAUSE JAVASCRIPT USE MILISECONDS FOR TIME CALCULATIONS.--*/

/*--BASIC OPERATORS:
- + (addition)
- - (subtract)
- * (multiply)
- / (Divide)
- % (remainder (modulo))
- ** (Exponentation)*/

/*-- UNARY, BINARY, AND OPERAND:
- Operand / Arguments: is what operators are applied to. 
5*2: the left operand is 5, the right operand is 2.

- An operator is UNARY if it has a single operand. Example:
The unary Negation - reverse the sign of a number.*/
let x: number = 1;
x = -x;
console.log (x); // -1
//it becomes -1 because the variable is changed. 

//An operator is binary if it has two operands. The same minus exist in binary form as well. Example:
let a: number = 1;
let b: number = 3;
console.log (a - b); // -2

//-- MODIFY IN PLACE:
// We often NEED to apply an operator to a varible and store the new result in that same variable. Exmaple:

let n: number = 2;
n += 5; // += means n = n + 5 (just shorter)
console.log (n) //became 7.
n += 2; //This updated the previous version of N which is 5+2. So it has become 5 + 2 + 2 = 9
console.log (n) // 9

//--INCREMENT & DECREMENT:
/* ++ (Increase the variable by 1)
-- (decrease the variable by 1)*/


let increment: number = 3;
increment++;
console.log (increment) // increased by 1 = 4.

/* -- POSTFIX & PREFIX FORM
- The operators ++ & -- can be placed either before or after a variable.
- When the operator goes after the variable, it's called Postfix form (let increment++).
- Prefix form: (++increment).
- If we'd like to increase a value and immediately use the result of the operator, we nid the prefix form. 
- If we'd like to increment a value but use it's previous value, we need the postfix form.*/

/*let ina: number = 20;
console.log (++ina) // 21
console.log (ina++) //20 */

/*--COMPARISON OPERATORS:
== (equal to:)
=== (equal value & equal type)
!= (not equal)
!== (not equal value or not equal type)
> (greater than)
< (less than)
>= (greater than or equal to)
<= (less than or equal to)*/

console.log("------------------------------------------------")

/* Exercise 1: Write a code to find area of rectangle (kotak)
PSEUDOCODE
1. Find the formuala on how to find an area of a rectangle
2. Length * Width (in this case, length = 5 & width = 3)
3. Create a variable of length & width
4. Create a variable called result to then become the printed answer.*/

let lengtH: number = 5
let width: number = 3
let result: number = 0

result = lengtH * width
console.log ("The are of the rectangle is: ", result, "cm.");

/* Exercise 2: Find the perimeter of a rectangle (kotak)
PSEUDOCODE
1. Find the formula on how to find a perimeter of a rectangle
2. Formula of a rectangle perimeter is: Perimeter = 2(length + width)
3. Create a variable perimeter*/
let perimeter: any = 2 * (lengtH + width)

result = perimeter;
console.log ("The Perimeter of the rectangle is: ", result, "cm.") //16 cm.

/* Exercise 3: Find a diameter, circumference, and area of a circle.
PSEUDOCODE
1. We know that the radius of circle is: 5 cm.
2. Find the formula on how to find a diameter of the circle
3. The formula of a circle diameter is: radius * 2 = 10 cm. */

let radius: number = 5
let diameter: number = radius * 2
let resulT: number = diameter

console.log ("The diameter of the circle is: ", resulT, "cm.")

/* 
4. Now, we need to find the formula of circumference of a circle.
5. Formula of Circumference is: C = 2.pi.r
6. Create a variable pi. */

let pi: number = 3.141592653589793 //u can use Math.pi for a more accurate answer. 
let circumference: number = 2 * pi * radius
resulT = circumference

console.log ("The circumference of the circle is: ", resulT, "cm.")

/*
7. We need to find the formula to calculate the area of a circle.
8. formula of area of a circle: A = pi*r2
9. create a variable area */

let area: number = pi * radius * radius
resulT = area;
console.log ("The area of the circle is: ", area, "cm.")

// Exercise 4: Find angles of triangle if two are given
/* PSEUDOCODE
1. Find the formula of counting angles in triangle.
2. Formula: c = 80 cm + d = 65 - 180degree
3. create a variable c & d
4. create a variable to then write the printed answer. */ 

let c: number = 80;
let d: number = 65;
let rezult: number = 180//180 degree - (c + d) 
console.log ("The angles of the triangles is: ", rezult, "cm.")

/* Exercise 5: Convert days to years, months, and days
(NOTES: 1 year: 365 days, 1 month: 30 days)
PSEUDOCODE
1. Find the formula to convert days into year, month, and days.
2. How to convert days to years (years = days / 365)

2. Create a variable of:
- Daysbefore
- Years
- Months
- DaysAfter

3. First, we need to find the years with the formula: days we want to count / 365 (1 day in a year).
4. To find the months, we need to find the remaining after years, which is: daysBefore (400) % (remainder) 365 = 35 (remaining days after year)
5. we need to find the month by dividing 35 (remaining days after year) / 30 (days in month)
6. We need to find the remaining days by using 35 % (modulus) 30 (days in month) to get the remainder or remaining days after we lost the month.

*/
let days: number = 400 //Days sample
let years: number = 365 // how many days in a year
let month: number = 30 // how many days in a month
let day: number = 0
let remainingAfterYears = 0

years = Math.floor(days / 365) 
remainingAfterYears = days % 365 // 400 % 365 (to find the remainder)
month = Math.floor(remainingAfterYears / 30) // remainingafteryears = 35 / 30 = 5
day = remainingAfterYears % 30

console.log (`${years} year, ${month} month, ${day} days.`)


/* Exercise 6: Write a code to get the difference between dates in days.

PSEUDOCODE:
Date 1: 2022 - 01 - 20
Date 2: 2022 - 01 - 22

create a variable of date 1 and date 2.
subtract date 1 & date 2*/

let date1: Date = new Date ("2022-01-20");
let date2: Date = new Date ("2022-01-22");
let diffinMs: number = date2.getTime() - date1.getTime()
let diffIndays: number = diffinMs / (1000 * 60 * 60 * 24); //1000 = milisecond. 60 = minutes. 60 = seconds. 24 = hour
  // let resulZ = date1 - date2;
console.log (diffIndays)
