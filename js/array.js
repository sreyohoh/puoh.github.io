var fruits = ['Banana', 'Car', 'Table', 'Applel'];
var sorted = fruits.sort();
console.log(sorted);

//Sort call back

var numberArray = [20,12,5,13,8,100];
var sortNumber = numberArray.sort(function(b,a){
    return a-b;
});
console.log(sortNumber);