// alert('Hello Would');
console.log("hello");
// document.write('hello');
var a = "Hello"; //string
var b = 2; // int
var c = 3.04; // float
var d = true; // boolean
var e = {}; // object
var f = []; // array
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
document.getElementById("display").innerHTML = "Hello Teacher";
document.getElementById("display").innerHTML = "<h3>Hello</h3>";
document.getElementById("display").style.fontSize = "50px ";
function displayWindowSize() {
  var w = window.outerWidth;
  var h = window.outerHeight;
  var txt = "Window size: width=" + w + ", height=" + h;
  document.getElementById("result").innerHTML = txt;
}
window.onresize = displayWindowSize;
