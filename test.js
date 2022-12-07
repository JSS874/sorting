function mergeSort(arr) {
    // If the array has only one element, return it
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Recursively sort the two halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    // Merge the two sorted halves and return the result
    return merge(sortedLeft, sortedRight);
  }
  
async function merge(left, right) {
    const result = [];
    console.log("1: " + result)
    await new Promise((res) => setTimeout(res, 1000));
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
    console.log("2: " + result);
    return result;
  }

const arr = [5, 4, 3, 2, 1];
const sortedArr = mergeSort(arr);
// sortedArr is now [1, 2, 3, 4, 5]
// console.log(sortedArr);
async function example() {
  return await new Promise((res) => setTimeout(res, 1000));
  console.log("ran");
}

// example()