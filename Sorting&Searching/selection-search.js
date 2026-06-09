
const arr = [3, 6, 1, 4, 8, 0];
const selectionSort = () => {
    for (let i = 0; i < arr.length - 1; i++) {
        let lower = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lower]) {
                lower = j;
            }
        }
        // swap current with lowest element 
        const temp = arr[i];
        arr[i] = arr[lower];
        arr[lower] = temp;
    }
}
selectionSort()
console.log(arr);