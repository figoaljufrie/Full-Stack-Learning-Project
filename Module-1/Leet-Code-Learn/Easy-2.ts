/* Exercise: VALID BRACKET CHECKERS:

PSEUDOCODE:
1. Create an empty array called `temp` to hold opening brackets.
2. Loop through each character in the string:

   * If the character is an opening bracket `(`, `{`, or `[`, add it to `temp`.
   * If the character is a closing bracket `)`, `}`, or `]`:

     * Check the last element in `temp`.
     * If it matches the current closing bracket, remove the last element using `pop()`.
     * If it does not match, or `temp` is already empty, return false.
3. After the loop ends:

   * If `temp` is empty, return true (all brackets are correctly matched).
   * If not, return false.

---
NOTES

* This uses an array to simulate how a "stack" works (last in, first out).
* Each opening bracket is stored.
* Each closing bracket must correctly match the last opening bracket stored.
* If at any point the match fails or there are leftover brackets, the string is invalid.

---

### Code
typescript

function isValid(s: string): boolean {
  let temp: string[] = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === '(' || char === '{' || char === '[') {
      temp.push(char);
    } else {
      let last = temp[temp.length - 1];

      if (
        (char === ')' && last === '(') ||
        (char === '}' && last === '{') ||
        (char === ']' && last === '[')
      ) {
        temp.pop();
      } else {
        return false;
      }
    }
  }

  return temp.length === 0;
}
```

---

### Example Outputs

```typescript
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));      // true
```

---

Let me know if you want this in a markdown file, PDF, or snippet format for easier saving.
*/