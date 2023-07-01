'use strict';

function logger() {
    console.log('My name is Harsh');
}
// calling / running / invoking function
logger();



function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const juiceMenuOne = fruitProcessor(5, 0);
console.log(juiceMenuOne);

const juiceMenuTwo = fruitProcessor(0, 4);
console.log(juiceMenuTwo);

const juiceMenuThree = fruitProcessor(2, 3);
console.log(juiceMenuThree);