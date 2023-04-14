let fruits = ["banana", "orange", "apple", "mango", "grapes", "strawberry", "pineapple"];
console.log(fruits);
let string1 = " ";
let string = " ";
function capitalize(string1){
    string1= string[0].toUpperCase() + string.slice(1-string.length);
  return string1;
}

var i = fruits.length;

let string2=" "; 

for (let a = 0; a < i; a++) {
    string = fruits[a];
string2 = string2 + capitalize(string1)+' ';
}
console.log(string2);