var x = Math.random() * 100;
console.log(Math.round(x));
var size;
var nums = [];
function setSize(val) {
    size = val;
    document.getElementById('sliderVal').innerHTML = size;
    console.log(size);
    createList(size)
}
function createList(size) {
    for (var i = 0; i < size; i++) {
        nums[i] = Math.round(Math.random() * 100);
    }
    console.log(nums);
    document.getElementById('display').innerHTML = nums;
}
