//-- Create a function to convert Excel sheet column title to it's corresponding column number.

/*
function excelColumnToNumber(column: string) {
  let result: number = 0;

  //ulangi setiap karakter dalam string dari kiri ke kanan.
  for (let i: number = 0; i < column.length; i++) {
    let char: string = column[i] // Untuk menyimpan karakter.

    //konversi huruf menjadi angka 1-26.
    //'A' itu memiliki kode ASCII 65, maka A = 1 bisa didapat dari ASCII - 64)
    let charValue: number = char.charCodeAt(0) - 64

    //hitung posisi dengan sistem basis 26
    // contoh: 'AB' => (1 * 26) + 2 = 28
    result = result * 26 + charValue
  }
  return result
}
console.log(excelColumnToNumber("A")) // 1
console.log(excelColumnToNumber("Z")) // 26
console.log(excelColumnToNumber("AA")) // 27
console.log(excelColumnToNumber("AB")) // 28
*/

//--------------------------------------------------

//-- Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

/*type NumberList = {
  key: number,
  count: number
}
function findSingleNumber(nums: number[]) {
  let numberList: NumberList[] = [] // Buat array untuk menyimpan angka unik dan jumlah kemunculannya

  for (let i: number = 0; i < nums.length; i++) {
    let found: boolean = false // Cek apakah angka sudah ada di NumberList

    for (let j = 0; j < numberList.length; j++) {
      if(numberList[j].key === nums[i]) {
        numberList[j].count++ // jika ketemu tambah jumlah
        found = true
      }
    }
    //Jika belum ada, tambahkan angka ke array
    if (!found) {
      numberList.push ({key: nums[i], count: 1})
    }
  }

  // cari angka yang countnya hanya 1
  for (let k: number = 0; k < numberList.length; k++) {
    if (numberList[k].count === 1) {
      return numberList[k].key
    }
  }

  //Jika tidak ditemukan
  return -1

}

console.log (findSingleNumber([2, 2, 1]))
console.log (findSingleNumber([4, 1, 2, 1, 2]))
console.log (findSingleNumber([3, 2, 2, 3, 1])) */

// <------------------------------------------------>

// Given two string s & target, return true if it is an anagram of s, and false otherwise.

function isAnagram(s: string, t: string) {
  //Jika panjangnya beda, pasti bukan anagram.
  if (s.length !== t.length) {
    return false
  }

  //buat array ukuran 16 untuk alfabet a-z, semua diisi 0

  let counter: number [] = []
  for (let i: number = 0; i < 26; i++) {
    counter[i] = 0
  }

// hitung jumlah huruf di s
for (let i: number = 0; i < s.length; i++) {
  let index: number = s.charCodeAt(i) - 97 //'a' = 97 di ASCII
  counter[index]++
}

// Kurangi jumlah huruf berdasarkan t

for (let i: number = 0; i < t.length; i++) {
  let index: number = t.charCodeAt(i) - 97
  counter [index]--
}

//Cek apakah semua jumlah kembali ke 0
for (let i: number = 0; i < 26; i++) {
  if (counter[i] !== 0) {
    return false
  }
}
return true
}

console.log (isAnagram("anagram","nagaram"))
console.log (isAnagram("rat", "car"))

// <--------------------------------------------------->

function climbStairs(n: number) {
  // Kasus dasar: 0 atau 1 langkah
  if (n === 0) return 0
  if (n === 1) return 1
  if (n === 2) return 2

  //Variable untuk menyimpan jumlah cara ke dua step sebelumnya

  let prev1: number = 2 // cara untuk melangkah step n - 1
  let prev2: number = 1 // geser prev2 jadi prev1
  let current: number = 0

  //perulangan / iterasi dari step 3 sampai n

  for (let i: number = 3; i <= n; i++) {
    current = prev1 + prev2 // Cara baru = cara dari n - 1 + n - 2
    prev2 = prev1 // geser prev2 jadi prev1
    prev1 = current // current jadi prev1 untuk perulangan berikutnya
  }
  return current
}

console.log (climbStairs(2)) // 2
console.log (climbStairs(3)) // 3
console.log (climbStairs(5)) // 8