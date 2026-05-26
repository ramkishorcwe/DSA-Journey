let num = 2345;
let count = 0;
while (num > 0) {
  console.log(num)
  num = parseInt(num / 10)
  count++
}

console.log(count)