// Idea

//   --> Find the smallest element from the unsorted part and place it at the correct position.

//   Algorithm
//   --> Start from index i = 0.
//   --> Find the minimum element from i to n-1.
//   --> Swap it with arr[i].
//   --> Repeat for the remaining array.


const arr = [3, 6, 1, 4, 8, 0];
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const arr = [3, 2, 1, 0];
// const arr = [2, 1, 2, 1];
// const arr = [5];
// const arr = [7, 7, 7];
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