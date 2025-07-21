// Primitive Types
/*let username: string = 'John Doe'
let age: number = 30
let isOnline: boolean = true
let nothing: null = null*/

//bawah adalah error karena nilai tidak sesuai dengan tipe data. Nilai number, tapi tipe data strings.
//let generateNumber: number = ''

//Non Primitive Types
/*let hobbies: string[] = ['reading', 'coding', 'hiking']
let year: number [] = [123,456,789]
let combine: [string, string, number, number] = ['abc', 'figo', 123, 298]
let user: {name: string, age: number} = {
  name: 'John Doe',
  age: 30
}*/

/*console.log ("Year : ", year)
console.log ("user: ", user)*/

//String built-In:

/*let message: string = 'hello World, anjay'
//1. length
console.log ('length of:', message.length);

//2. to Upper Case
console.log ("Upper case: ", message.toUpperCase())

//3. to Lower Case
console.log ("Lower case: ", message.toLowerCase())

//4. Includes
console.log ("includes 'anjay' :", message.includes('anjay'))

//5. Slice
console.log ("slice (3,10) : ", message.slice (3,10))

let message: string = "Hello World"
console.log ("Slice (2,4): ", message.slice (2,4))



//6. Replace
console.log ("Replace 'anjay' with 'mantap' : "+ message.replace ('anjay', 'mantap'))
//---------------------//

//-- template literal
let firstName: string = "John"
let lastName: string = "Doe"
let age1: number = 36
let profession: string = "Developer"
let introduction: string = `My name is ${firstName} ${lastName}. I am ${age} years old. My profession is ${profession}.`
console.log (introduction)*/

//NUMBER BUILT-IN:

/*let value: number = 123.456
//1. toFixed
console.log ("to Fixed (1) : " + value.toFixed(1))

//2. toExponential
console.log ("toExponential() : " + value.toExponential())

//3. toString
console.log ("to String:" + typeof value.toString())

//4. parseInt
let numericString = '42px'
console.log ('Convert to Number ; ', parseInt(numericString))*/

//5. NaN
/*let alphabet: number = ('abc')
console.log ('if Nan or Not: ', isNaN(alphabet))*/
//------

//DAY

/*let currentDate: Date = new Date ()
let specificDate: Date = new Date ('2025-06-25T00:00:00')
//console.log ('current date: ', currentDate)
//console.log ('Specific date: ', specificDate)

//1, Get full year ()
let today: Date = new Date ()
console.log ("Year: ", today.getFullYear())

//2. Get Month()
console.log ("Month: ", today.getMonth()+1)

// 3. toLocalDateString (
console.log ("Locale Date : ", today.toLocaleDateString())

console.log ("Year, ", today.getFullYear(), "Month, ", today.getMonth()+1)*/

/*let numberA: number = 10
let numberB: number = 3

let sum: number = numberA + numberB
let diff: number = numberA - numberB
let multiply: number = numberA * numberB
let div: number = numberA / numberB
let modulus: number = numberA % numberB
let exponent: number = numberA ** numberB

console.log (sum)
console.log (diff)
console.log (multiply)
console.log (div)
console.log (modulus)
console.log (exponent)*/

// -- Unary Operator:
// -- Unary minus:
let num: number = 5
let negativeNum: number = -num
console.log (negativeNum)

//-- Unary Plus
let textNumber: string = '1234'
let converted = +textNumber //unary plus, tipe data berubah dari 'strings' menjadi number.
console.log (typeof converted)

// -- shorthand Operator
let shortNumber: number = 12
shortNumber +=5
console.log ('after sum with 5:', shortNumber)

shortNumber -=2
console.log ('after dec. with 2:', shortNumber)

shortNumber *=2
console.log ('after multiply with 2:', shortNumber)

//Increment & Decrement
/*
Increment: ++ (incresed by 1)
Decrement: -- (decresed by 1)
*/
/*let nnnUmber: number = 21
nnnUmber++;
console.log ('after increment:', nnnUmber)

nnnUmber--;
console.log ('after decreament:', nnnUmber)*/

//--POSTFIX & PREFIX FORM

//Postfix
/*let a: number = 27
let result1: number = a++

console.log ('Postfix result:', result1)
console.log ('after postfix:', a)

//prefix
let b: number = 20
let result2: number = ++b

console.log ('Prefix result:', result2)
console.log ('After prefix:', b)*/

//Comparison Operators

let x : any = 5;
let y : any = '5';

//1. Equal (mengecek nilai saja)
console.log ('x == y:', x == y)

//2. Strict Equal (mengecek nilai dan tipe data)
console.log ('x === y:', x === y)

//3. Not Equal (tidak sama dengan)
console.log ('x != y:', x != y)

//4. Strict not Equal (tidak sama dengan nilai dan tipe data)
console.log ('x !== y', x !== y)

//5. Greater than (lebih dari)
console.log ('x > 10,', x > 10)


//6. Less than (kurang dari)
console.log ('x < 10:', x < 10)

//7. Greater than or equal to
console.log ('x >= 5:', x >= 5)

//8. Less than or equal to
console.log ('x >= 5:', x >= 5)

//PSEUDOCODE
/*
Process to narrate the code with more humanize words.*/