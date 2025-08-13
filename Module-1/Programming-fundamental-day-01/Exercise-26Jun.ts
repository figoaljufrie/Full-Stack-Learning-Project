// 1. Find area of rectangle using a code:

const lengthRect: number = 5
const widthRect: number = 3
let areaOfRect: number = lengthRect * widthRect;
console.log (`Area of Rectangle: ${areaOfRect}`)

//2. Write a code to find perimeter of rectangle:
let perOfRect: number = ++areaOfRect;
console.log (`Perimeter of Rectangle: ${perOfRect}`)

//3. Write a code to find diameter, circumference, and area of a Circle:

//diameter
const radius: number = 5
let diameter: number = radius * 2;
console.log (`Radius of a circle: ${diameter}`)

//circumference

const circumference = Math.PI * diameter 
console.log (`Circumference of the circle: ${circumference}`)

//area of a circle
const area =  Math.PI * radius * radius
console.log (`Area of the Circle: ${area}`)

//4. Write a code to find angles of triangle if two angles are given:
let angleA: number = 80
let angleB: number = 65
let angleC: number = 180 - angleA - angleB
let resultAngle: number = angleC;
console.log (`The angles of the triangle:${resultAngle}`)

//5. Write a code to convert days to years, months and days:

let totalDays: number = 400
let years: number = Math.floor (totalDays / 365);
let remainingDays: number = totalDays - (years * 365);
let month: number = Math.floor (remainingDays / 30);
let days: number = remainingDays - (month * 30)
console.log (`${years} year(s), ${month} month(s), ${days} day(s)`)

//6. Write a code to get difference between dates in days:

// Pseudo Code untuk menghitung selisih hari diantara kedua tanggal

// SET date1 = "2022-01-20"
// SET date2 = "2022-01-22"
// CONVERT date1 and date2 to Date
// SET diffMilliseconds = date2 - date1
// SET diffDays = diffMilliseconds / (1000 * 60 * 60 * 24)
// DISPLAY diffDays

// solutions :
let date1: Date = new Date("2022-01-20")
let date2: Date = new Date("2022-01-22")

let diffMilliseconds: number = date2.getTime() - date1.getTime() // dalam milidetik
let diffDays: number = diffMilliseconds / (1000 * 60 * 60 * 24) // konversi ke hari

console.log('Difference in days : ', diffDays)