/*LONGEST COMMON PREFIX!

1. Problem Summary
Write a function to find the longest common prefix string among an array of strings.
If there is no common prefix, return an empty string `""`.

2. Notes

A prefix is the beginning part of a word.Example: For the word `"interview"`, the prefixes include `"i"`, `"in"`, `"int"`, `"inte"`, etc.

If all strings start with the same characters at the beginning, that shared portion is called the common prefix.

The task is to keep trimming the prefix until it matches the start of every word.

---

PSEUDOCODE:

1. If the input array is empty, return an empty string.
2. Set the first word in the array as the initial prefix.
3. Loop through the rest of the words in the array:

   * While the current word does not start with the current prefix:

     * Remove the last character from the prefix.
     * If the prefix becomes an empty string, return an empty string.
4. Return the final prefix after the loop ends.

---

**4. Final Code (TypeScript)**

```typescript
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  // Assume the first string is the longest common prefix
  let prefix = strs[0];

  // Compare the prefix with each string in the array
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      // Reduce the prefix by removing the last character
      prefix = prefix.slice(0, prefix.length - 1);

      // If the prefix becomes empty, return an empty string
      if (prefix === "") return "";
    }
  }

  return prefix;
}

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
```

---

Let me know if you would like this saved as a file or explained differently.
*/