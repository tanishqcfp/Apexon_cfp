let arr = [1,3,2,6,3,5,66,15];

//arr.sort((a,b) => a-b); //asc order
arr.sort((a,b) => b-a); //desc order
console.log(arr);


//sort array of obj

let arr1 = [{name:"Tanishq",age : 22},{name : "maverick" ,age : 20}, {name : "thakur" ,age : 21}];

// arr1.sort((a,b) => a.age - b.age); //by age
// arr1.sort((a,b) => a.name.localeCompare(b.name)); //by alphabetical order
console.log(arr1);
