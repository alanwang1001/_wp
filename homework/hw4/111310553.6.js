function filterArray(arr, predicate) {
  const result = [];
  for (const item of arr) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evens = filterArray(numbers, num => num % 2 === 0);
console.log(evens); 
