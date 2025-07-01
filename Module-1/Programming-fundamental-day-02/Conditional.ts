console.log ('Hello World');

let age: number = 10

if (age > 20){
  console.log ('Incorrect')
}
else if (age < 20) {
  console.log ('Correct')
}

/*
If-statements used booleans value: True or false.*/

// Case 1:

let isSunny: boolean = true

if (isSunny){
  console.log (`Let's Hang The Laundry Outside.`)
}

// Case 2:
// == (value only) / === (value and data type)

let eggsInFridge = 30
if (eggsInFridge == 0){
  console.log (`Let's buy the eggs.`)
}

else {
  console.log ('You still has Eggs.')
}

/*LOGICAL OPERATOR
- && (AND):
False + false = false
False + true = false
True + false = false
True + True = true

- || (OR):
False + false = false
False + true = true
True + false = true
True + True = true

- ! (NOT)
True = false
False = true
*/

// Case 3:

let currenthour: number = 17

if (currenthour >= 16 && currenthour <= 18){
  console.log ('Siram tanaman')
}
else{
  console.log ('belum')
}

// Case 4:
let personAge: number = 22
let hasMoney: boolean = true
let hasId: boolean = true

if (personAge >= 21 && hasMoney && hasId){
  console.log ('bisa bikin sim')
}

// Case 5:

let battery: number = 90
let isPluggedIn: boolean = true
let systemUpdated: boolean = false

if ((battery >=50 || isPluggedIn) && systemUpdated){
  console.log ('Computer is ready to use.')
}

// ELSE STATEMENT
// Case 1:

let isRainy: boolean = false

if (isRainy){
  console.log ('Umbrella needed')
}
else{
  console.log ('No umbrella needed')
}

//Case 2:

let hasSugar = true
if (!hasSugar){
  console.log ('Make plain tea')
}
else {
  console.log ('Make sweet tea')
}

//Case 3:

let balance: number = 100
let itemPrice: number = 120

if (balance >= itemPrice){
  console.log ('buy')
}
else {
  console.log ('Dont buy')
}

//Case 4:

let passport: boolean = true
let hasVisa: boolean = false
let hasDeposito: boolean = true

if (hasVisa && passport || hasDeposito){
  console.log ('go')
}
else {
  console.log ('cannot go')
}

//ELSE IF STATEMENT:

// case 1:
let temperature: number = 100

if (temperature > 35){
  console.log ('So hot')
}
else if (temperature > 25){
  console.log ('warm')
}
else {
  console.log ('normal')
}

//Case 2:

let score: number = 69

if (score >= 90){
  console.log ('Grade A')
}
else if (score >= 75){
  console.log ('Grade B')
}
else if (score >= 70){
  console.log ('Grade C')
}
else {
  console.log ('Grade D')
}

//Case 3:

let hour: number = 24

if (hour >= 10 && hour <= 14){
  console.log ('Good Afternoon')
}

else if (hour >= 14 && hour <= 19){
  console.log ('Good Evening')
}

else if (hour >= 19 && hour <= 24)
console.log ('Good Night')
else {
  console.log ('Good Morning')
}

// Case 4:

/*
Seseorang hanya boleh masuk ke bioskop malam jika:
- Berusia >= 18 tahun dan membawa kartu identitas, atau
- Sudah punya tiket online
- tetapi, tidak boleh masuk
*/

let visitorAge: number = 17
let idCard: boolean = false
let onlineTic: boolean = true
let isSick: boolean = true

if ((visitorAge >= 18 && idCard) || onlineTic){
  if (!isSick) {
  console.log ('You may enter the Cinema.')
  } else {
    console.log ('You may not enter the Cinema.')
  }

} else if (visitorAge >= 18 && !idCard){
  console.log ('You need to bring your ID Card.')
} else {
  console.log ('You are not eligible to enter.')
}

//--SWITCH CASE STATEMENT
// Case 1:

let day: string = 'Wednesday'

switch (day){
  case 'Monday':
    console.log ('Start of the week.')
    break;
  case 'Tuesday':
    console.log ('Almost Weekend')
    break;
  default:
    console.log ('Just another day')
}

//Case 2:

//Math.floor (membulatkan)
//Math.random (mengacak)
let probability: number = Math.floor (Math.random()*10)

switch (probability){
  case 5:
    console.log ('Selamat kamu mendapatkan undian berhadiah level 5')
    break;
  case 4:
    console.log ('Selamat kamu mendapatkan undian berhadiah level 4')
    break;
  default:
    console.log ('Kamu kurang beruntung')
}

// Case 3:

/* 3 jenis layanan pengiriman: Regular, expres, dan Same-day.

- berat <= 1 kg
--- Regular: 10.000
--- express: 15.000
--- same-day: 20.000

- 1 kg < berat <= 5kg
--- regular: 20.000
--- express: 30.000
--- same-day: 40.000

- berat > 5 kg
--- regular: 30.000
--- express: 45.000
--- same-day: 60.000
*/

let packageType: string = "Same-day"
let weight: number = 0.5
let cost: number = 0

switch (packageType){
  case "Regular":
    if (weight <= 1){
      cost = 10000}
    else if (weight <= 5){
      cost = 20000
    }
    else {
      cost = 30000}
    
      break;
  case "Express":
    if (weight <= 1){
      cost = 15000
    }
    else if (weight <= 5){
      cost = 30000
    }
    else {
    }
    cost = 45000
    break;
  case "Same-day":
    if (weight <= 1){
      cost = 20000
    }
    else if (weight <=5){
      cost = 40000
    }
    else {
      cost = 60000
    }
    break;
    default:
      console.log ('Invalid package type.')
}

if (cost > 0){
  console.log ('Shipping Type:', packageType)
  console.log ('Weight:', weight)
  console.log ('Cost:', cost.toLocaleString("id-ID"))
}