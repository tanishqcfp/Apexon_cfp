//As variable
const value = function(){
    console.log("hello world");
}

// function passed as an argument
function sayHello(fn){
    fn();
}

sayHello(function(){
    console.log("hi");
})

// return function from another function
function outer(){
    return function inner(){
        console.log("im inner");
    }
}

const fn = outer(); //here it will get inner function
console.log(fn()); //here it will get all consoles and return values of inner function

//function stored in data structure
const arr = [
  function () { console.log("A"); },
  function () { console.log("B"); }
];


