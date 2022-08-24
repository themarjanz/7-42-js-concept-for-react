// 1. Array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65]
const [x, y] = numbers;
// console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
console.log(boxify(90, 34));

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['King khan', 'Dhakar Mastan']
}

const [firstMovie, secondMovie] = student.movies;

// object destruring
const { name, age } = { name: 'alu', age: 14 };
const { id, salary } = { id: 12, name: 'alu', salary: 3400, age: 14 };

const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee.specification.watch;