const arr = [3, 6, 1, 4, 8, 0];
const insertionSort = () => {
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
insertionSort()
console.log(arr)