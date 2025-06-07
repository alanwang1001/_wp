function countLetters(str) {
  const letterCount = new Map();

  for (const char of str) {

    if (/[a-zA-Z]/.test(char)) {
      const lowerChar = char.toLowerCase(); 
      if (letterCount.has(lowerChar)) {
        letterCount.set(lowerChar, letterCount.get(lowerChar) + 1);
      } else {
        letterCount.set(lowerChar, 1);
      }
    }
  }

  return letterCount;
}

const result = countLetters("Hello World!");
for (const [letter, count] of result) {
  console.log(`${letter}: ${count}`);
}
