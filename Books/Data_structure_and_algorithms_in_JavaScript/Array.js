var nums = [];
for (var i = 0; i < 10; i++){
  nums[i]=i+1
}
var samenum = nums;

nums[0] = 400;
// console.log(samenum[0]);

function copy(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++){
    arr2[i] = arr1[i];
  }
}


function concat(accumulatedString, item) {
  return accumulatedString + ','+ item;
}

var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduce(concat);
// console.log(sentence);

function add(runningTotal, currentValue) {
  return runningTotal + currentValue;
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = nums.reduce(add);
console.log(sum); // 显示 55

// polyfill for Array
Array.matrix = function (numrows, numcols, initial) {
  var arr = [];
  for (var i = 0; i < numrows; i++) {
    var columns = [];
    for (var j = 0; j < numcols; j++){
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}


// exercise
// 1。 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。
function greadRecord(name,gread) {
  this.name = name;
  this.gread = gread?gread:[];
  this.average = average;
}

function average() {
  var total = 0;
  for (var i = 0; i < this.gread.length; ++i) {
    total += this.gread[i];
  }
  return total / this.gread.length;
}
// 2. 将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词。
//  先sort(),而后reverse()

//3. 修改本章前面出现过的 weeklyTemps 对象，
//   使它可以使用一个二维数组来存储每月的有用数据。增加一些方法用以显示月平均数、具体某一周平均数和所有周的平均数。
// function weekTemps() {
//   this.dataStore = [];
//   this.add = add;
//   this.average = average;
//   init();
// }
// function init(){
//   var arr = [];
//   for (var i = 0; i < 5; i++) {
//     var columns = [];
//     for (var j = 0; j < 7; j++){
//       columns[j] = 0;
//     }
//     arr[i] = columns;
//   }
//   this.dataStore = arr;//初始化一个5*7的二维数组用于存放某个月的数据
// }
// function add(temp) {
//   this.dataStore.push(temp);
// }
// function average() {
//   var total = 0;
//   for (var i = 0; i < this.dataStore.length; ++i) {
//      total += this.dataStore[i];
//   }
//   return total / this.dataStore.length;
// }
// 月平均数？
// 具体某一周平均数？
// 所有周的平均数？

// 4. 创建这样一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一 起，显示成一个单词。
let obj = ['q', 'u', 'i', 'c', 'k'];
console.log(obj.join(""))