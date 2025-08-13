// Review Looping

// Case For-loop Menentukan bilangan ganjil atau genap di dalam array:

let random: number [] = [10, 7, 5, 13, 20, 30, 35, 19, 17]
let result: string [] = [] // Untuk menampung hasil yang diharapkan, ["Genap", "Ganjil", "Ganjil, est"]

// i = 0, atau Index dari Array Random.
// Index 0 = 10 pada let random.
// Maka, i akan mengulang sebanyak 8x (8 index)
// Selamat i < (lebih kecil ketimbang) random.length (.length = menghitung panjang Index dari variable kita = RANDOM.)

for (let i: number =0; i < random.length; i++){

  //random [i] % (modulus) 2 == 0
  // Jika yang berada di dalam index, cont: 10 tidak memiliki bilangan sisa % 2 atau == 0, maka 10 akan menjadi bilangan genap.

  //10 % 2 = 0 karena 5+5 = 10
  //7 % 2 = 1 karena 3x2 = 6 (modulus-nya 1)
  if (random [i] % 2 == 0){
    result [i] = "Genap"
  } else {
    result [i] = "Ganjil"
  }

  //result [i] = "genap", result [i] adalah result per index.
  //Akan diulang result [i] sesuai dengan jumlah index yang ada di random.length.

  //result [i], dalam hal ini, akan berulang sebanyak dari 0 sampai 8, selama masih < (kurang dari) jumlah random.length
}
console.log ("Result:", result)

/* Notes:
Perbedaan For Loop & While loop Statement:
- For digunakan saat problems ada batasannya.
- While digunakan dalam kasus tidak ada batasan, atau N, atau infinity.

Contoh for loop:
- Buatkan bilangan ganjil / genap dari 1-10.

Contoh While:
- Buatkan bilangan sum dari nomor 1 sampai N.
*/

//Case While:
// Company barang, punya 3 shift per-hari.
// Masing-masing shift memiliki penjualan yang berbeda-beda.
// Hitung keseluruhan penjualan per hari dari masing-masing shift.

const weeklySales: any = [
  [5, 8, 6], // <- hari ke-1 // Index luar = per hari. 
  [4, 7, 3], // <- hari ke-2
  [6, 9, 5], // <- hari ke-3
  [3, 4, 2], // dan seterusnya.
  [8, 6, 7],
  [5, 5, 5],
  [6, 7, 8]
]

let day: number = 0 // Untuk menjadikan index luar sebagai hari. Perhitungan dari index ke- 0 atau hari ke-1.

//Selama hari masih dalam seminggu, lakukan perulangan.
// Selama day <(kurang dari) weeklySales (array di atas).
//weeklySales.length = jumlah index dalam array weeklySales. Dalam hal ini: 0-6 atau hari ke-1 sampai hari ke-7/.
while (day < weeklySales.length){
  let dailyTotal: number = 0 // jumlah total barang yang akan terjual dalam sehari.

  // hitung total penjualan per-shift per hari.
  //Nah, ini kita pecah dari array luar menjadi menghitung index di dalam index luar.
  // di bawah ini:
  // shift = 0 (0 adalah index yang ada di dalam hari ke-1. Dalam hal ini adalah 5)
  /*weeklySales[day].length adalah weeklySales(index luar) [day]<-index di dalam index luar
  weeklySales[day].length adalah:
  1. weekylySales (Array dengan index luar)
  2. weeklySales[day] (menghitung index yang berada di dalam index luar) <- Simplenya, untuk menghitung total penjualan shift per-harinya.
  3. weeklySales[day].length <- .length ini untuk menghitung jumlah index yang ada di dalam index luar. [5<- index dalam (shift), 8, 6] <- index luar (hari)
  */
  for (let shift = 0; shift < weeklySales[day].length; shift++){
    dailyTotal += weeklySales[day][shift]
  }
  console.log ('Day', day + 1, '- Total Sales: ', dailyTotal, "Items.")
  day++ // Untuk melanjutkan pengulangan ke hari berikutnya.
  //console.log di atas karena flow-nya adalah: 1. Melakukan pencetakan, 2. Menambah /mengupdate loop, 3. Melakukan pencetakan lagi, terus-menerus sampai = weeklySales 

}

//Latihan String & Sub-string 'Hello World':

let text: string = "Hello World" // <- kata yang akan dicetak.
let search: string = "ell" // <- kata yang akan dihilangkan. 
let finalResult: string = "" // <- Variable untuk menampunt hasil akhir setelah sub-string dipotong.

let foundIndex: number = -1 // Mencari posisi kemunculan pertama dari search manual.

//untuk menghitung index di dalam text length.
// text.length (11) - search.length (3) = 8
for (let i: number = 0; i <= text.length - search.length; i++){
  let match: boolean = true // untuk mengecek apakah huruf yang dibandingkan sama atau tidak.

  //Di bawah adalah cara untuk cek apakah substring yang berada di posisi i sama dengan search string.

  for (let j: number = 0; j < search.length; j++){
    if (text[i + j] !== search[j]) {
      match = false
    }
  }
    if (match) {
    foundIndex = i
  }
} 

//Jika ditemukan persamaan i & j, potong sring sebelum dan sesudah search:

if (foundIndex !== -1){
  for (let i: number = 0; i < text.length; i++){
    if (i < foundIndex || i >= foundIndex + search.length){
      finalResult += text[i]
    }
  }
} else {
  finalResult = text
}
console.log (finalResult)
// PR untuk dipahamin nanti:

