//ARRAY!

// -- Definisi menggunakan array biasa:
const fruits: string [] = ["Apple", "Banana", "Orange"]
const temperature: number [] = [30, 31, 5, 29, 28]
const attendance: boolean [] = [true, true, false, true]

console.log ('Access apple from fruits:', fruits [0])
console.log ('Access 29 from temperature: ', temperature [3])

/*temperature.length counts the array inside of the variable 'temperature', which is 5:
- 30 (index 0)
- 31 (index 1)
- 5 (index 2)
- 29 (index 3)
- 28 (index 4)
5 as in length - 1 = 4 (index 04) = 28
*/
console.log ('Access 28 from temperature without direct index', temperature [temperature.length - 1])

/*How to access the middle part inside the array:
- Divide temperature by 2
- if it's odd number, use Math.floor to membulatkan hasil, in this case:
- temperature.length = 5 / 2 = 2.5 inc. math.floor = 3
*/

console.log ('Access 5 from temperature without direct index:', temperature [Math.floor(temperature.length / 2)])


//Definisi menggunakan array generik:
const familyMembers: Array<string | number> = ['Father', 'Mother', 'Sister', 1959, 1970, 1991]

console.log (familyMembers[Math.floor(familyMembers.length - 6)])

//--ARRAY dua dimensi:
const collectionOfDevice: [string[], string[]] = [['Samsung', 'Galaxy'], ['Oppo', 'Reno']]

console.log ("--------------------------------------------------")

console.log ('Access "Galaxy" from collectionOfDevice:', collectionOfDevice[0][1])
console.log ("--------------------------------------------------")

//-- Built-in method Array:
let student: string[] = ["John Doe", "Joni", "Jonah", "Jolai"]

student.push("Rumi") // Push menambahkan string kederetan (index) paling belakang.
console.log ('After Push from Student:', student)

student.unshift ("Jolon") // Unshift menambahkan elemen dari index paling depan.
console.log ('AFter unshift from Student:', student)

student.pop() // Pop berguna untuk menghapus elemen dari index paling belakang.
console.log ('After pop from Student:', student)

student.shift() // Shift untuk menghapus elemen dari index paling depan.
console.log ('After shift from Student:', student)

const hasBob = student.includes ("Jolai") //Includes untuk mencari ketersediaan elemen di dalam array
console.log (hasBob)

const scoring: number [] = [75, 75, 80, 95, 60, 65, 40, 100, 70, 65, 65, 60]
const result: number [] = scoring.filter((score) => score > 75) // untuk menyaring kondisi tertentu.

console.log ("--------------------------------------------------")

console.log (result)
const sortingResult: number [] = scoring.sort((x, y) => x - y) //Sorting urutan dari kecil ke besar.
console.log (sortingResult)

let resultScore: number = 0
for (const score of scoring) {
  resultScore += score
}
console.log ('Total Score: ', resultScore) //Menghitung total variable scoring di atas

console.log ("--------------------------------------------------")

// -- FOR OF LOOP:
// -- Perulangan untuk mengambil langsung isi dari index:

const phoneType: string[] = ['Samsung', 'Infinix', 'Iphone', 'Realme', 'Pocophone']
for (const type of phoneType) { //Type hanya variable, bisa diganti nama lain.
  console.log (type)
}

// For In Loop:
// Perulangan untuk mengambil index:

for (const index in phoneType){
  console.log (`index ${index} : ${phoneType[index]}`)
}

console.log ("--------------------------------------------------")
