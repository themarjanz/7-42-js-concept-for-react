const numbers = [89, 35, 98, 12];
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['King khan', 'Dhakar Mastan']
}

// 1. template string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

//  2. arrow function

// single arrow function declare
const getFiftyFive = () => 55;
// add  by arrow function
const addSIxtyFive = num => num + 65;
// even or odd by arrow function

const isEven = x => x % 2 == 0;
const isOdd = x => x % 2 == 1;

const addThree = (x, y, z) => x + y + z;

// multiline
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator

// const newNumbers = numbers;

// numbers.push(99);
// numbers.push(99);
// numbers.push(99);
// console.log(newNumbers);

const newNumbers = [...numbers];

numbers.push(99);
numbers.push(99);
numbers.push(99);

// console.log(numbers);
// console.log(newNumbers);

// create a new array from an older array an dadd an element

const currentNumbers = [...numbers, 55];

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);




