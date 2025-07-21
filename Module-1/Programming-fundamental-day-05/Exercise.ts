// Case 1:

function getStats(arr: number[]){
  let lowest: number = arr[0]
  let highest: number = arr[0]
  let total: number = 0

  for (let i: number = 0; i < arr.length;i++){
    let current: number =arr[i]

    if (current < lowest){
      lowest = current
    }

    if (current > highest){
      highest = current
    }

    total = total + current
  }
  let average: number = total / arr.length
  return {
    lowest: lowest,
    highest: highest,
    average: average
  }
}
let arr: number [] = [12, 5, 23, 18, 4, 45, 32]
console.log (getStats(arr))

//Case 2:

