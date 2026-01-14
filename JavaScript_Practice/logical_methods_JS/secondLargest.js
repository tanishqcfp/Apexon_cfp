let arr = [1,2,8,19,20,33];
let largest = -Infinity;// Number.MIN_VALUE; use -infinity bcz Number.MIN_VALUE holds the smallest positive number not the smallest-ve;
let secondlargest = -Infinity;//Number.MIN_VALUE; same here

for(let i = 0 ; i<arr.length ; i++){
if(arr[i] > largest){
    secondlargest = largest;
    largest = arr[i];
}
else if(arr[i] < largest && arr[i] > secondlargest){
    secondlargest = arr[i];
}
}
console.log(secondlargest);
