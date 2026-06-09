
// Idea

// Repeatedly compare adjacent elements and swap them if they are in the wrong order. After each pass, the largest unsorted element moves to the end.

// Algorithm

// -> For an array of length n:

// -> Repeat passes from 0 to n-2.

// -> In each pass, compare arr[j] and arr[j+1] for j = 0 to n-i-2.

// -> If arr[j] > arr[j+1], swap them.

// -> If no swaps happen in a pass, stop early (array is sorted).

// const arr = [3,6,1,4,8,0];
// const arr = [9,8,7,6,5,4,3,2,1];
// const arr = [1,2,3,4,5,6,7,8];
// const arr = [0,-1,5,-3];
const arr = [2,1,2,1]
const bubleSort = () => {
    for(let i=0; i<arr.length-1; i++){
        let isSorted = false;
        for(let j=0; j<arr.length-i; j++){
            if(arr[j]>arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
               isSorted = true;
            }
        }
        if(isSorted = false){
            break;
        }
    }
}
bubleSort()
console.log(arr)