// Question 1. Double the Numbers
// Given an array [1, 2, 3, 4, 5], use map to create a new array where each number is doubled. [1]
let arr = [1,2,3,4,5];
let double = arr.map(num=>num*2);
console.log(double);

// Question 2. Extract Property Values
// Given an array of objects [{name: &quot;John&quot;, age: 25}, {name: &quot;Jane&quot;, age: 30}], use map to extract only the
// names into a new array. [2]
let arr1 = [{name:"tanishq" , age:22},{name:"dalal",age:21}];
let result = arr1.map(human=>human.name);
console.log(result);

// Question 3. Convert to Uppercase
// Given [hello,world,javascript] use map to convert all strings to uppercase. [3]
let arr2 = ["hello","world","javascript"];
let uppercase = arr2.map(word => word.toUpperCase());
console.log(uppercase);


// Question 4. Filter Even Numbers
// From the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use filter to get only even numbers. [3]
let arr3 = [1,2,3,4,5,6,7,8,9,10];
let even = arr3.filter(num => num%2 == 0);
console.log(even);

// Question 5. Filter by Age
// Given an array of user objects, use filter to return only users who are 18 years or older. [2]
let arr4 = [{name:"tanishq",age:22},{name:"dalal",age:21},{name:"nain",age:18},{name:"sahil",age:12}];
let eligible_age = arr4.filter(person => person.age >= 18);
console.log(eligible_age);

// Question 6. Remove Empty Strings
// From ["banana","","apple",""] use filter to remove all empty strings. [4]
let arr5 = ["banana","","apple",""];
let empty = arr5.filter(fruit => fruit !== "");
console.log(empty);

// Question 7. Sum All Numbers
// Given [10, 20, 30, 40, 50], use reduce to calculate the total sum. [5]
let arr6 = [10,20,30,40,50];
const sum = arr6.reduce((total, num) => total + num, 0);
console.log(sum); 

// Question 8. Find Maximum Value
// Use reduce on [5, 12, 8, 130, 44] to find the largest number in the array. [2]
let arr7 = [5,12,8,130,44];
const maxi = arr7.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
});
console.log(maxi);

// Question 9. Count Occurrences
// Given [apple, banana, apple,"orange","banana","apple"], use reduce to count how many times each
// fruit appears (return an object).
const arr8 = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = arr8.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);

// Question 10.Chain All Three Methods
// Given student data [{name: &quot;Smith&quot;, marks: 80}, {name: &quot;Jenny&quot;, marks: 55}, {name: &quot;John&quot;, marks: 35}], add 20
// marks to students scoring below 60 (map), filter students with marks above 60 (filter), then calculate
// total marks (reduce).

const students = [
  { name: "ram", marks: 30 },
  { name: "sham", marks: 49 },
  { name: "raju", marks: 41 }
];

let totalMarks = students
  .map(student => {
    if (student.marks < 40) {
      return { name: student.name, marks: student.marks + 20 };
    }
    return student;
  })
  .filter(student => student.marks > 40)    
  .reduce((sum, student) => sum + student.marks, 0);
console.log(totalMarks);


