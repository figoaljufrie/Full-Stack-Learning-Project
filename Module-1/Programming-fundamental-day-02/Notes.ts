/*
Ciri-ciri bilangan prima:
- Bilangan bulat lebih dari 1 yang hanya memiliki dua faktor pembagi, yaitu 1 dan bilangan itu sendiri.
- Lebih besar dari 1: Harus lebih besar dari angka 1.
- Hanya memiliki dua faktor, yaitu 1 dan bilangan itu sendiri.
- Tidak bisa dibagi dengan bilangan lain: Selain 1 dan bilangan itu sendiri.

Contoh bilangan prima: 2, 3, 5, 7, 11, 17, 19, dst.

Kenapa 7 bilangan Prima:

7 / 1 = 7 (no remainder)
Tapi, 7 / 2 = 3.5 (There's a decimal)
7 / 3 = 2.333, (decimal)
7 / 4, 5, 6 = All gives decimal values.

But, 7 / 7 = 1

So, the only numbers that divide 7 evenly are 1 and 7. Angka 1 dan bilangan itu sendiri. 

Contoh yang bukan bilangan prima:

6 / 1 = 6

6 / 2 = 3 (no remainder)
6 / 3 = 2 (no remainder)
6 / 6 = 1 (no remainder)

So, 6 is not prime number because it can be divided by other number than 1 and it's own number (6).

What is a Remainder:

6 / 3 = 2, no remainder.

7 / 3 = 2 WITH remainder = 1

3 + 3 = 6 + 1 = 7, so the remainder is one.

-----------STATEMENTS---------------------
IF-ELSE IF- ELSE STATEMENTS:
- To make decisions in your code -- like asking questions and choosing what to do based on the answer.

Structure:
- If (condition 1){
// Runs if condition1 is true

} (But, if condition 1 is NOT True),

- else if (condition 2){
 // runs if condition1 is false. 
 } (But, if NEITHER condition ARE TRUE)

 - else {
 // runs if none of the above conditions are true.
  }

  EXAMPLE:
let num = 10;

if (num > 0) <- condition 1, if 10 greater than 0 {
console.log ("Positive Number");

} else if ( num < 0) <- condition 2, if 10 less than 0
 {
console.log ("Negative number");

} else <- if both conditions above are not TRUE {
console.log ("Zero"); 
}

Output will be: "Positive number", because 10 is greater than 0.
--------------------------
FOR LOOP STATEMENT:

Purpose:
To repeat something a specific number of times.

Structure:
for (start; condition; update){
// code runs again and again until condition is false.
}

Example:

for (let = 1; i <= 5; i++){
console.log (i);
}
Output will be:
1
2
3
4
5

breakdown:
let = i <- Start at 1
i (1) is <= 5: So, i will keep looping WHILE i is still at the number 5 OR LESS
i++: add increment (1) to i each time UNTIL i = 5.
----------------------------------------------
WHILE LOOP

Basic Idea:
"As long as this condition is true, keep doing something."

But:
If the condition is false at the beginning, it won't run at all.

Purpose:
To repeat something AS LONG AS THE CONDITION IS TRUE.

Structure:

While (condition){
// code runs again and again until the condition is false.
}

Example:

let i = 1;

while (i <= 5){
console.log (i);
i++
}

Same output with FOR LOOP:
1
2
3
4
5

You must:
- Declare i before the loop
- Update i manually (inside the loop)

Another Example:

let i = 1;

while (i <= 3){
  console.log ("i is:", i);
  i++;
}

What happens above is:
1. i = 1 -> is 1 <= 3?
Yes, then it will print i is: 1.

2. i = 2 -> is 2 <= (less than) 3?
Yes, then it will print i is: 2.

3. i = 3 -> is 3 <= (less than or equal) 3?
Yes, then it will print i is: 3.

4. i = 4 -> is 4 <= (less than or EQUAL TO) 3?
No, then it will STOP. 


----------------------------------------------
DO... While Loop

Purpose:
Same as while, but it runs at least once, even if the condition is false.

Structure:
do {
// Runs once, then checks the conditions.
} while (condition);

Example:

let i = 1;

do {
  console.log (i);
  i++
} while (i <= 5);

OUTPUT:
1
2
3
4
5

It will still run the first time even if the condition is false.

*/