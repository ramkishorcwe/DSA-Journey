Idea

//   --> Build the sorted array one element at a time by inserting each element into its correct position in the already-sorted part.

//   Algorithm
//   --> Assume the first element is sorted.
//   --> Pick the next element (key).
//   --> Shift larger elements one position to the right.
//   --> Insert key into its correct position.
//   --> Repeat until the array is processed.

const arr = [3, 6, 1, 4, 8, 0];
// const arr = [9,8,7,6,5,4,3,2,1];
// const arr = [1,2,3,4,5,6,7,8];
// const arr = [0,-1,5,-3];
// const arr = [2,1,2,1]
const InsertionSort = () => {
    for (let i = 1; i < arr.length; i++) {
        const selectedElement = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            // swap
            if (arr[j] > selectedElement) {
                arr[j + 1] = arr[j];
                arr[j] = selectedElement
            }
        }
    }
}
InsertionSort()
console.log(arr)

// Visualization
// [5, 3, 4, 1]

// Pass 1: insert 3
// [3, 5, 4, 1]

// Pass 2: insert 4
// [3, 4, 5, 1]

// Pass 3: insert 1
// [1, 3, 4, 5]