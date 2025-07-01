//Exercise 1:

/*
- Input number, in this case: 25
- If the number mod 2 equals to 0
- Print: 'Even number'
If cannot, print: 'Odd Number'
*/

let num = 22
if (num % 2 === 0){
  console.log ("Even Number")
}
else {
  console.log ("Odd Number")
}

// Exercise 2:
/* Pseudocode:
- Input number
- If number <= 1
- Not Prime
- Else
- Loop i from 2 to number - 1
- Not prime
- Stop
- If no advisor found
- Prime
*/

/*Ciri-ciri bilangan prima:
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

3 + 3 = 6 + 1 = 7, so the remainder is one.*/


let num1: number = 21
let isPrime: boolean = true; //Asumsikan, isPrime adalah nilai default yang true.

if (num1 <= 1) {
  isPrime = false;
} else {
for (let i = 2; i < num1; i++){
  if (num1 % i === 0){
    isPrime = false;
    break;
    }
  }
}

if (isPrime){
  console.log ('Its a prime number')
}
else {
  console.log ('Its not a prime number')
}


//Exercise 3:
// Pseudo untuk exercise 3

// Input N
// Set sum = 0
// Loop i from 1 to N
// sum = sum + i
// Output sum

/* HASIL CHAT GPT
let n = 5
let sum = 0

for (let i = 1; i <= n; i++){
sum = sum + i
}
console.log (sum)
*/

//HASIL KAK BAGAS

let N: number = 5
let sum: number = 0 // Untuk kemudian menampung hasil penjumlahan dari 1 sampai N
let i: number = 1 // Inisiasi awal untuk perulangan / looping.

while (i <= N) {
  sum = sum + i
  console.log ("sum:",sum)
  i = i + 1
  console.log ("i:  ",i)
}


//Exercise 4:

let nN = 3
let result = 1
for (let i = nN; i >= 1; i--){
result = result * i
}
console.log (`The Factorial of ${nN} is: ${result}`)