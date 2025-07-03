/* -- FUNCTION:
Untuk mengumpulkan kode ke dalam satu tempat.
Function = a 'subprogram' that can be called in another code.

Fuction is composed of a SEQUENCE of statements and/or conditions called: the function Body.

Values / variables can be passed to a function. And, the function will return a value.

Two ways of function:

Function Declaration:
consists of the function keyword, followed by:

- The NAME of the function (ex. function one <- name.)

- A list of PARAMETERS to the function, enclosed in parentheses & separated by commas.

Ex: function one (number <- paramaters: number <- types) {
  return number * number;
}

const x: number = one (4);

Then, the code statemend that define the function, enclosed in curly brackets.

------------------------------------------
Function Expression:
Function Declaration = syntatically a statement
Funtion can also be anonymous. Then it can be assign to a varibale.

Ex:

const one = function (number: number) {
  return number * number;
}
const x: number = one (4); x = 16
  console.log (x)
*/


function introductionMySelf (name: string, profession: string): string {
  let text: string = `Hello my name is ${name}. My profession is ${profession}.`
  return text
}
console.log (introductionMySelf ('Bagas', 'Software Engineer'))
console.log (introductionMySelf ('Imam', 'Software Engineer'))
console.log (introductionMySelf ('Theo', 'Software Engineer'))
console.log (introductionMySelf ('Rafli', 'Software Engineer'))
console.log (introductionMySelf ('Figo', 'Software Engineer'))

console.log ("--------------------------")

function sumScore (score: number []): number {
  let result: number = 0
  for (let i = 0; i < score.length; i++){
    result += score [i]
  }
  return result
}

const studentScore: number [] = [50, 70, 80, 85, 90, 90, 60]
console.log ('Total score of Student:', sumScore (studentScore))

console.log ("--------------------------")

//Case 3:
// Lucky Draw: BMW (1), Scooter (2), Trip to Singapore (3), Shopping Voucher (4).

function drawPrize(luckyNumber: number): string {
  let prize: string

  switch (luckyNumber){
    case 1:
      prize = "Congratulations! You won a BMW car!"
      break

    case 2:
      prize = "Congratulations! You won a Vespa Scooter!"
      break
    
    case 3:
      prize = "Congratulations! You won a trip to Spore!"
      break
    
    case 4:
      prize = "Congratulations! You won a Shopping Voucher!"
      break
    default:
      prize = "Oops, Sorry! Better luck next time!"
  }
  return `Your lucky number is ${luckyNumber} -> ${prize}`
}

const participantMember = Math.floor (Math.random() * 10)
console.log ("Prize Number:", participantMember)
console.log (drawPrize(participantMember))

console.log ("--------------------------")

// -- FUNCTION EXPRESSION
// -- Fungsi yang dimasukkan ke dalam variabel

// Case 1: Menghitung apakah suhu hari ini panas
const isHot = function (temp: number): boolean {
  return temp > 30
}

console.log (isHot(20))

//-- FUNCTION HOISTING:
//DECLARATION FUNCTION:

console.log ('Test Hoisting on Test Declare Function:', testDeclareFunction())
function testDeclareFunction(){
  return "hello."
}

//Expression Function tidak bisa di-hoisting. Ex:

/*console.log ('Test Hoisting on Test Express Function:', testExpressFunction())
const testExpressFunction = function ()
{
return "hello"
} */

// -- NESTED FUNCTION:
// Case 1: Membuat teh

function makeTea(): string {

function boilWater(): string {
  return "Boiling water..."
}
function addTeaLeaves(): string {
  return "Adding Tea Leaves..."
}
console.log (boilWater())
console.log (addTeaLeaves())
return "Tea is Ready!"
}

console.log (makeTea())

// -- CLOSURE FUNCTION
// Sebuah fungsi di mana mempunya return berupa fungsi juga:
//Void, tidak memiliki tipe data.
//Any, bypass typescript dari JS. Untuk membaca atau running tipe data.

//Case 1: counter function
function createCounter(): () => void {
  let count: number = 0
  return function (){
    count++
    console.log (`Current count: ${count} `)
  }
}

const myCounter = createCounter()
myCounter()
myCounter()
myCounter()