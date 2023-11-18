function isPalindrome(word) {
  const cleanWord = word.toLowerCase().replace(/[^a-z]/g, ''); // Clean the word: lowercase and remove non-letter characters
  let left = 0;
  let right = cleanWord.length - 1;

  while (left < right) {
    if (cleanWord[left] !== cleanWord[right]) {
      return false; // If characters don't match, it's not a palindrome
    }
    left++; // Move the left pointer forward
    right--; // Move the right pointer backward
  }

  return true; // If the loop completes, it's a palindrome
}

// Tests
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
