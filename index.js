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
  drawShapes();
}

async function bubbleSort(nums) {
  console.log(nums.length + "ran");
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
    //console.log("Pass");
  }
  //document.getElementById("display").innerHTML = nums;
  console.log(nums);
}

const canvas = document.getElementById("area");
const ctx = canvas.getContext("2d");

//ctx.fillRect(55,55,100,100);

function drawShapes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var width = window.innerWidth / nums.length;
  var x = 0;
  let colors = new Map([
    [1, "red"],
    [2, "blue"],
    [3, "green"],
    [4, "orange"],
    [5, "yellow"]
  ])
  var color = 1;
  //ctx.fillStyle = "red";
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 5;
  for (var i = 0; i < nums.length - 1; i++) {
    ctx.fillStyle = colors.get(color);
    color++;
    if (color == 6) {color = 1;}
    //ctx.setTransform(1, 0, 0, -1, 0, nums[i]);
    ctx.fillRect(x, 55, 20, nums[i]);
    //ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.stroke();
    x += 20;
  }
}
