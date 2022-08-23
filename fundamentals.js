// 1. How to declare a variable using let and const
const fatherName = 'Nurul';
let season = 'rainy';
season = 'winter';


// 2.condition --- 6 basic condition: >, <, ===, !==, <=, >=
// multiple condition: &&, ||

if (fatherName === 'nurul' || season === 'rainy') {

} else if (fatherName === 'Nurul') {

} else {

}

// 3. array
// index
// length,push
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. loop 
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

//5, function

function multiply(num1, num2) {
    const result = num1 + num2;
    return result;
}
const output = multiply(35, 78);
console.log(output);

// 6. object
// object declare korte {} use kora hoy
// Array declare korte [] use kora hoy

// 3 ways of access property by name
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['King khan', 'Dhakar Mastan']
}
// access property by name

const myVariable = 'age';

console.log(student.age); //direct by property
console.log(student['age']); // access by property name string
console.log(student[myVariable]); // access by property name in a variable