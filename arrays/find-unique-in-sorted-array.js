const arr = [0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 4];
let unique = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[unique]) {
    arr[unique + 1] = arr[i];
    unique += 1;
  }
}
// console.log(new Set([20,10,0,1,1,0,9,5,1,52,2,3,3,4]), unique)
console.log(arr)