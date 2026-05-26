
const n = 4;

for (let i = 0; i < n; i++) {
  flag = 1;
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += flag === true ? 1 : 0;
    flag = !flag
  }
  console.log(row);
}