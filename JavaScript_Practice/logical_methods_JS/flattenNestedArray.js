let arr = [1, [2, 3], [4, [5, 6]]];

// let res = arr.reduce((acc,num)=>{
//     return acc.concat(num);
// },[]); 

//using reduce we can only flatten only 1 level 


// let res = arr.flat(1); //depth 1
let res = arr.flat(2); //depth 2

console.log(res);