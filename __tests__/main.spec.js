const multiply = require('../main');

it ('should get product from two numbers', () => {
    let result = "2*2=4\n" +
    "2*3=6 3*3=9\n" + 
    "2*4=8 3*4=12 4*4=16\n";
    expect(multiply(2, 4)).toBe(result);
});

it ('left is greater than right', () => {
    let result = false;
    expect(multiply(50000, 40000)).toBe(result);
});

it ('right is greater than left', () => {
    let result = false;
    expect(multiply(10, 5)).toBe(result);
});

it ('has a negative input', () => {
    let result = false;
    expect(multiply(-1, 1)).toBe(result);
});