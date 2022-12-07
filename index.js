var x = Math.random() * 100 + 1;

var size;
var nums = [];
var counter = 0;

function setSize(val) {
  size = val;
  document.getElementById("sliderVal").innerHTML = size;
  createList(size);
}
function createList(size) {
  nums = [];
  for (var i = 0; i < size; i++) {
    nums[i] = Math.round(Math.random() * 100);
  }
  document.getElementById("display").innerHTML = nums;
  drawShapes();
}

async function insertionSort(nums) {
  const fd = new Date();
  let startTime = fd.getMilliseconds();
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > current) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = current;
    document.getElementById("display").innerHTML = nums;
    drawShapes();
    await new Promise((res) => setTimeout(res, 10));
  }
  const ed = new Date();
  let endTime = ed.getMilliseconds();
  let passed = endTime - startTime;
  document.getElementById("display").innerHTML = "Timer: " + (Math.abs(passed)) + "ms";
}

async function bubbleSort(nums) {
  const fd = new Date();
  let startTime = fd.getMilliseconds();
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        var temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
        document.getElementById("display").innerHTML = nums;
        drawShapes();
      }
      await new Promise((res) => setTimeout(res, 10));
    }
  }
  const ed = new Date();
  let endTime = ed.getMilliseconds();
  let passed = endTime - startTime;
  document.getElementById("display").innerHTML = "Timer: " + (Math.abs(passed)) + "ms";
}

async function heapSort(nums) {
  const fd = new Date();
  let startTime = fd.getMilliseconds();
  let heap = [];
  for (let i = 0; i < nums.length; i++) {
    heap.push(nums[i]);
    let current = heap.length - 1;
    let parent = Math.floor((current - 1) / 2);
    // Swap with parent if current is greater
    while (heap[current] > heap[parent]) {
      let temp = heap[current];
      heap[current] = heap[parent];
      heap[parent] = temp;
      current = parent;
      parent = Math.floor((current - 1) / 2);
    }
  }

  // Sort the numsay
  for (let i = nums.length - 1; i > 0; i--) {
    // Move current root to end
    let temp = heap[0];
    heap[0] = heap[i];
    heap[i] = temp;

    // Re-heapify
    let current = 0;
    let left = (current * 2) + 1;
    let right = (current * 2) + 2;
    while (heap[current] < heap[left] || heap[current] < heap[right]) {
      if (heap[left] > heap[right]) {
        // Swap with left child
        let temp = heap[current];
        heap[current] = heap[left];
        heap[left] = temp;
        current = left;
      } else {
        // Swap with right child
        let temp = heap[current];
        heap[current] = heap[right];
        heap[right] = temp;
        current = right;
      }
      left = (current * 2) + 1;
      right = (current * 2) + 2;
    }
    nums = heap;
    document.getElementById("display").innerHTML = heap;
    drawShapes();
    await new Promise((res) => setTimeout(res, 10));
  }
  document.getElementById("display").innerHTML = heap;
  const ed = new Date();
  let endTime = ed.getMilliseconds();
  let passed = endTime - startTime;
  // document.getElementById("display").innerHTML = "Timer: " + (Math.abs(passed)) + "ms";
}


async function mergeSortRunner(nums) {
  const fd = new Date();
  let startTime = fd.getMilliseconds();
  mergeSort(nums);
  const ed = new Date();
  let endTime = ed.getMilliseconds();
  let passed = endTime - startTime;
  document.getElementById("display").innerHTML = "Timer: " + (Math.abs(passed)) + "ms";
}

function mergeSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];
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
  nums = result
  document.getElementById("display").innerHTML = nums;
  drawShapes();
  return result;
}

async function selectionSort(nums) {
  const fd = new Date();
  let startTime = fd.getMilliseconds();
  for (var i = 0; i < nums.length; i++) {
    minimum_index = i;
    for (var j = i+1; j <nums.length; j++) {
      if (nums[j] < nums[minimum_index]) {
        minimum_index = j;
      }
    }
    var temp = nums[i];
    nums[i] = nums[minimum_index];
    nums[minimum_index] = temp;
    drawShapes();
    await new Promise((res) => setTimeout(res, 10));
    
  }
  const ed = new Date();
  let endTime = ed.getMilliseconds();
  let passed = endTime - startTime;
  document.getElementById("display").innerHTML = "Timer: " + (Math.abs(passed)) + "ms";
    
}

const canvas = document.getElementById("area");
const ctx = canvas.getContext("2d");


function drawShapes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var width = canvas.width / nums.length;
  var x = 0;
  let colors = new Map([
    [1, "red"],
    [2, "blue"],
    [3, "green"],
    [4, "orange"],
    [5, "yellow"]
  ])
  var color = 1;
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 1;
  for (var i = 0; i < nums.length; i++) {
    ctx.fillStyle = colors.get(color);
    color++;
    if (color == 6) {color = 1;}
    ctx.fillRect(x, 150, width, -(nums[i]));
    ctx.stroke();
    x += canvas.width / nums.length;
  }
}

async function stopWatch(timer) {
  if (timer) {
    counter++;
  }
}