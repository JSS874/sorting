var x = Math.random() * 100;
console.log(Math.round(x));
var size;
var nums = [];
//var nums = [1, 5, 2, 4];
//bubbleSort();
function setSize(val) {
  size = val;
  document.getElementById("sliderVal").innerHTML = size;
  console.log(size);
  createList(size);
}
function createList(size) {
  nums = [];
  for (var i = 0; i < size; i++) {
    nums[i] = Math.round(Math.random() * 100);
  }
  console.log(nums);
  document.getElementById("display").innerHTML = nums;
}

async function bubbleSort(nums) {
  console.log(nums.length + "ran");
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        var temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
        document.getElementById('display').innerHTML = nums;
      }
      await new Promise(res => setTimeout(res, 10));
    }
    //console.log("Pass");
  }
  //document.getElementById("display").innerHTML = nums;
  console.log(nums);
}
