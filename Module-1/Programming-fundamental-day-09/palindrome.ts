//Exercise Palindrome.

function isPalindrome (word: string): string {
  let cleanWord: string = word.toLowerCase() // ubah huruf menjadi kecil agar tidak berpengaruh.
  let reversed: string = "" // Buat versi kata yang dibalik

  for (let i = cleanWord.length - 1; i >= 0; i--){
    reversed += cleanWord[i] // hasil terbaliknya disimpan ke reversed.
  }
  return cleanWord === reversed ? "Palindrome" : "Not a Palindrome"
}

const xi: string = "madam"
console.log (isPalindrome(xi))

//loop dari belakang ke depan untuk membalik kata:
