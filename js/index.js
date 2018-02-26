// // alert('Hello World!');
// // document.write('Hello JS');
// // console.log('Hello JS');

// let productTitle = 'Mazda RX-8';
// let productPrice = 40000 + 20;
// let isAvailable = true;

// document.write(productTitle);
// document.write('<br>');
// document.write(productPrice);
// document.write('<br>');
// document.write(isAvailable);
// document.write('<br>');
// document.write('New price:');
// document.write('<br>');
// productPrice = productPrice * 0.1;
// document.write(productPrice);
// document.write('<br>');
// let productColor; // undefined
// document.write('Product Color');
// document.write('<br>');
// document.write(productColor);
// productColor = null;
// document.write('<br>');
// document.write('Product Color');
// document.write('<br>');
// document.write(productColor);

// let obj = {};

// let sym = Symbol();

// // Number = 0, 1, 1.5 1.5e10 NaN Infinity

// console.log(Math.sqrt(4));
// console.log(Math.sqrt(-4));
// console.log(-4/0);
// // Arithmetic operators +, -, *, /, %

// const msg = 'Hello ' + ' World';
// console.log(msg);

// const userName = prompt('Enter your name');
// console.log('Hello, ' + userName);

// const userAge = parseFloat(prompt('Enter your age'));
// console.log('Your age is ' + userAge);
// const newAge = userAge + 1;
// console.log('Next year you will be ' + newAge);

// // > < == === != !== >= <= && || !
// if (userAge >= 18) {
//     console.log('Adult');
// } else {
//     console.log('Child');
// }

const someResult = addThree(10, 20, 30);
console.log(someResult);

function add(a, b) {
    return a + b;
}

function addThree(a, b, c) {
    return a + b + c;
}