/* Measure Big O Notation

Big O Notation:
A way to measure an algorithm's efficiency. It measures the time it takes to run your function as the input grows. In other words, how well does the function scale.

Two parts of measuring efficiency:
1. Time Complexity: measuring how long the function takes to run in terms of it's computational steps.

2. Space Complexity: Has to do with the amount of memory used by the function.

EXAMPLE BELOW:
Case 1: Menjumlahkan harga belanjaan harian dari daftar barang.
*/

//O(n) = Linear example:
function calculationPrice(prices: number[]) {
  let total: number = 0
  for (let i: number = 0; i < prices.length; i++) {
    total += prices[i]
  }
  return total
}

const prices: number[] = [10000, 150000, 20000, 35000]
console.time("calculationPrice")
console.log (calculationPrice(prices))
console.timeEnd("calculationPrice")

/* Measuring Big O Notation:
 O(1) = Constant
 O(n) = linear
 O(log n) = logarithm N
 O (n2) = square 2
 O (nN) = N square N */

 // Time Complexity Example: Quadratic Time (O(n^2))
 //Case: Mengecek Duplikasi Dalam list teman

 function hasDuplicateFriendship (names: string[]) {
  for (let i : number = 0; i < names.length; i++) {
    //console.log ("-- index i ke" + i + "adalah" + names[i])
    for (let j: number = i + 1; j < names.length; j++) {
      //console.log ("-- index j ke" + j + "adalah" + names[j])
      if (names[i]=== names[j]) {
        return true
      }
    }
  }
  return false
 }

 const friendship: string[] = ["Bob", "John Doe", "Jane Doe", "Bob"]

 console.time("hasDuplicateFriendship")
 console.log (hasDuplicateFriendship(friendship))
 console.timeEnd("hasDuplicateFriendship")

/* Time Complexity - Analogy:
1. Let's say we have a box package that need to send from BSD to Jakarta. 
2. The Mileage between BSD & Jakarta is about one hour.
3. The delivery courier could only bring one box each trip.
4. What would happen if there are three box of packages?
5. In this situation, time complexity would be count as O(n) or called as order linear.

Space Complexity - Analogy:
1. Depends on the last situation, let say we use truck as the transportation.
2. Which has larger space than motorcycle.
3. The mileage still takes one hour but it could bring three box packages in a single trip.
4. With trucks, it is only need one hour to send 3 box packages. But, in return we need more spaces on transportation delivery. */

//SPACE COMPLEXITY EXAMPLE: LINEAR SPACE (O(n))
//Case: Menyimpan semua nota transaksi harian ke dalam array.

type Receipt = {
  id: number
  price: number
}

function storeReceipts(receipt: Receipt[]) {
  const stored: Receipt[] = []
  for (let i: number = 0; i < receipt.length; i++) {
    stored.push ({
      id: receipt[i].id,
      price: receipt[i].price
    })
  }
  return stored
}

const receipt: Receipt[] = [
  {id: 1, price: 15000},
  {id: 2, price: 25000},
  {id: 3, price: 40000}
]
console.log (storeReceipts(receipt))
//Output berupa array baru sebesar nilai n, alokasi memoi baru sebesar (O(n))

//Space Complecity - Constant space (O(1))
// Case; Menghitung total berat barang tanpa menyimpan masing2 barang.

function calculateWeight(weight: number[]) {
  let total: number = 0
  for (let i: number = 0; i < weight.length; i++) {
    total += weight[i]
  }
  return total
}

const weights: number [] = [2.5, 1.2, 3.0, 4.0, 5.5]
console.log (calculateWeight(weights))
// Tidak menyimpan data tambahan, selain variable total
// Space tetap walaupun data input bertambah -> (O(1))

// Case Bruteforce:
// Menyimpan index pasangan bilangan di dalam array yang jumlahnya sama dengan target.


function findAllPairs (prices: number[], target: number) {
  const result: [number, number][] = [] // untuk menampung pasangan elemen yang membentuk target

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] + prices[j] === target) {
        result.push([prices[i], prices[j]])
      }
    }
  }
  return result
}
const pairNumbers: number[] = [10, 20, 15, 15, 5, 25]
const target: number = 30

console.log (findAllPairs(pairNumbers, target))

// -- Linear Search:

// -- Binary Search:
// -- Case: Mencari harga dalam daftar produk.

function binarySearch(sortedPrices: number[], target: number) {
  let left: number = 0
  let right: number = sortedPrices.length - 1

  while (left <= right) {
    const middle: number = Math.floor(left + right) / 2

    if (sortedPrices[middle] === target) {
      return middle
    } else if (sortedPrices[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return -1
}

const sortedPrices: number[] = [5000, 10000, 12000, 15000, 20000, 25000]
const targetPrice: number = 25000
console.log (binarySearch(sortedPrices, targetPrice))