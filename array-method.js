
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'slver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'camera', price: 9000, brand: 'cannon', color: 'gray' }
];

// map

const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

// forEach

products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))

// multiline forEach

products.forEach(product => {

})

// filter

const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specialName = products.filter(p => p.name.includes('n'));
console.log(specialName);

// find
// find korla without arraw object dea deba
const special = products.find(p => p.name.includes('n'));
console.log(special);