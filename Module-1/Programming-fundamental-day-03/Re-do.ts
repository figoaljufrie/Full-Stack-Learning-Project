//-- GIT & GITHUB.
/*----------------
--GIT
A tool used to manage the versions of the programs we created. So, we can separate which programs are being released and which are still being developed.

The function of GIT:
- Easier to manage projects.
- Every changes we made are documented in the git history, hence why we can checked or even get back to the previous changes.
- Saved our projects online on web-based with hosting repository, such as: Github, Gitlab, Bitbucket, etc.
- With Git, we can share and do collaboration of our programs with co-workers.

--GITHUB
A web-based platform that incorporates git version control features so they can be used collaboratively. 

Also, it includes project and team managament features. As well as opportunities for networking and social coding. 

------------------*/

/* Exercise 1: Display the multiplication of 9
PSEUDOCODE:
1. Create a variable 9 (the number we want to multiply)
2. Create a variable number 1 (to use as the starting point in for-loop) I dont even really need this as it's already handled by the loop.
3. Create a variabel result to restore the equation of variable number 1
4. Use for-loops (I think so).
5. Create an expression variable to have the multiply symbols as the strings. 
6. The For-loops is to count from i (1) until a (10), a is the final equation of the multiplication.
7.
*/

let x: number = 9
let result: number = 0

for (let i = 1; i <= 10; i++) {
    result = x * i
  console.log (`${x} x ${i} = ${result}`)
}

//----------------------------------------------

/* Exercise 2: Palindrome.
PSEUDOCODE:
Notes: I don't really know how to do it as i havent learn on how to customize strings or etc. But, im gonna guess using the pseudocode.

1. So, palindrome is a word that have the same result if we read it backward.
2. So, we need to create a variable string, for the word. Booleans for the true / false (whether it's palindrome or not.)
3. if we want to be careful, we can start with string to lowercase, menghindari future error because typescript is case-sensitive.
4. After that, we create a variable start: number = 0, which is to count the word from the index 0.
5. And, we create variable end: number = str.length - 1, .length counts the letter starting from 1, so we have to give - 1 so the amount are subtract by 1 to match the index word.
6. And then, we give the while-loop. while (start < end), if (str[start] !== str[end])
return; false
}
start++
end--

7. Create a variable letter to test
8. print with if - else, if right, print palindrome. else, print not a palindrome.
*/

function isPalindrome(str: string): boolean {
  str = str.toLowerCase ();

  let start: number = 0;
  let end: number = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
  }
  start++
  end--

  }
  return true;
}
let wordTest: string = "Ramar"

if (isPalindrome(wordTest)){
  console.log ("Palindrome")
}
else {
  console.log ('Not a Palindrome')
}

//------------------------------------------------

/* Exercise 3:
PSEUDOCODE:
1. Create a variable km for the string.
2. create variable distance in cm, in this case is 100000 cm
3. creeate the variable result to store the final result
4. In the Result variable, write formula to turn cm to km, which is CM / 100000 = km
5. Print the rresult*/



let km: string = 'km'
let distanceCm: number = 100000;
let result1: number = distanceCm / 100000;

console.log (`${distanceCm}cm is equal to: ${result1} ${km}.`);

//-------------------------------------------------

/*Exercise 4:
PSEUDOCODE:
1. Create a variable rupiah
2. Create a variable string 'rp'
3. make rp as tolocalestring ID in console.log*/

let rupiah: number = 1000
let formatted = rupiah.toLocaleString("Id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 2});

console.log (formatted)

//------------------------------------------------

/*Exercise 5:
PSEUDOCODE:*/

let oriWord: string = 'Hello World'
let searchWord: string = 'ell'
let result2: string = "";
let found = false;

for (let i = 0; i <= oriWord.length - searchWord.length; i++) {
  let match = true;

  for (let j = 0; j < searchWord.length; j++) {
    if (oriWord[i + j] !== searchWord [j]) {
      match = false;
      break; //Don;t need to be run.
    }
  }

  if (match && !found) {//true
  found = true;

  for (let k = 0; k < i; k++) {
    result2 += oriWord[k]
  }
  for (let k = i + searchWord.length; k < oriWord.length; k++) {
    result2 += oriWord[k];
  }
  break;
    }
}
if (!found) {
  result2 = oriWord;
}
console.log(result2)