//LOOP STATEMENT:

//Case 1:
let text:string = 'Hello World.'
for (let i = 0; i < 3; i++){
  console.log (text)
}

/*
let i = 0 -> Kondisi awal
i < 3 -> mau berapa kali loopingnya
i++ -> increment, artinya looping akan maju atau mundur jalannya.
*/

console.log ("---------------------------------------")

// Case 2

for (let i = 0; i  <= 5; i++){
  console.log ('Reminder:' + i + 'bangun woi!')
}

console.log ("---------------------------------------")

//Case 3

let prices: number[] = [12000,15000,8000]
let total: number = 0

for (let i = 0; i <prices.length; i++){
  total += prices[i]
}
console.log ('Total Belanja:', total.toLocaleString("id-ID"))

//Case 4
let days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] 

for (let i = 0; i < days.length; i++){
  console.log (`Hari kerja ke- ${i}: ${days[i]}`)
}
console.log ("---------------------------------------")

//WHILE LOOP
//Case 1:
let count: number = 1
while (count <= 3 ){
 console.log (`Alarm bunyi ke-${count}`)
 count++
}

//Case 2:

let randomNumber: number = 5
while (randomNumber > 0){
  console.log (randomNumber)
  randomNumber--
}

//Case 3:

let i: number = 1
let totalCount: number = 0

while (i <= 100){
  totalCount += i
  i++
}
console.log ("Jumlah total: ", totalCount)
console.log ("---------------------------------------")

//DO WHILE LOOP STATEMENT:

/* Case 1: Simulasi mesin ATM
- Lihat Saldo
- Tarik tunai
- Keluar*/

let choice: string = ""

do {
  console.log ("Menu: ")
  console.log ("1. Lihat Saldo")
  console.log ("2. Tarik Tunai")
  console.log ("3. Keluar")

  choice = "3"
}
while (choice !== "3")
  console.log ('Terima kasih telah menggunakan layanan kami!')

//Case 2:

let glassLevel: number = 0
const fullLevel: number = 5

do{
  console.log (`Menuangkan air ... Level sekarang: ${glassLevel+1}`)
  glassLevel++
} while (glassLevel < fullLevel)
  console.log ("Gelas sudah penuh")