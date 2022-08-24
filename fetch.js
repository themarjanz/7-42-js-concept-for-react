// 1. JSON
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['King khan', 'Dhakar Mastan']
}

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2. fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data))

// keys, values
const keys = object.keys(student);
const values = object.values(student);

// for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object 
// loop on an object using in

// add or remove from array

const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'slver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'camera', price: 9000, brand: 'cannon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'lal' };
// copy products array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone  means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');
