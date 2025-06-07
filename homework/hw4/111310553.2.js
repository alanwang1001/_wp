function uniqueSorted(arr) {
  let uniqueArr = [...new Set(arr)];
  
  uniqueArr.sort((a, b) => a - b);
  
  return uniqueArr;
}
console.log(uniqueSorted([4, 2, 5, 2, 3, 4, 1]));
