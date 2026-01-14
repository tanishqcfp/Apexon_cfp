let students = [
    { name: "Alice", marks: 80 },
    { name: "Bob", marks: 55 },
    { name: "Charlie", marks: 70 },
    { name: "David", marks: 80 },
    { name: "Eve", marks: 55 }
];

let group = students.reduce((acc,student)=>{
    let key = student.marks;

    if(!acc[key]){
        acc[key] = [];
    }

    acc[key].push(student);

    return acc;
},{});

console.log(group);