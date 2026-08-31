// Caesar Cipher function
function caesarCipher(a, b) {
  
  // Turn the string into an array of individual characters
  return a.split('').map((char) => {
    
    // Check if the current character is a letter (A-Z or a-z)
    if (char.match(/[a-z]/i)) {
      
      // Get the numerical character code of the letter
      // Example: 'A' = 65, 'a' = 97
      const code = char.charCodeAt(0);
      
      // Choose the starting character code:
      // 65 for uppercase letters (A-Z)
      // 97 for lowercase letters (a-z)
      const base = code >= 65 && code <= 90 ? 65 : 97;
      
      // Shift the letter by 'b' positions
      // % 26 makes the alphabet wrap around after Z
      // + base converts the number back into the correct character-code range
      return String.fromCharCode(((code - base + b) % 26) + base);
    }
    
    // If the character isn't a letter, leave it unchanged
    // Example: spaces, numbers, punctuation, etc.
    return char;
    
  // After changing every character, join the array back into a string
  }).join('');
};

// Export the function so other files can use it
module.exports = caesarCipher;
