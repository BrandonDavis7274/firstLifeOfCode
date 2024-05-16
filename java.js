
var v = "this a string"
console.log(v);
var y = true;
console.log(y);
var p = 1010;
console.log(p);
var e;
console.log(e);
var r = null
console.log(r);
let isCarChanged = false;


function changeCar() {
    isCarChanged = true;
    console.log(isCarChanged);
    
}

changeCar();

if (isCarChanged) {
    console.log('Car is Changed.');
} else {
    console.log("Car is not changed.");
}
//is a variable that can not be changed
Const = "un";
console.log(Const);
//var can be changed and is more global
var vo = "co";
console.log(vo);
//let sets up variable to change later down the code
let vp = "ded";
console.log(vp);

const sandwich = ["grillcheese", "pbj", "blt", "reuben"];
const newSandwich = sandwich.map(item => item === "pbj" ? "hamC" : item);
console.log(newSandwich);
