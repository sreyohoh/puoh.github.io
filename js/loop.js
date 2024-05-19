// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

var fruits = ['Banana', 'Car', 'Table', 'Applel', "test"];
for(item in fruits) {
    console.log(item);
}
for(item of fruits) {
    console.log(item);
}