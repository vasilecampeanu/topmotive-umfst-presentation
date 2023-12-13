// A pure function to calculate the square of a number
function square(x) {
    return x * x;
}

// Using the map function to apply 'square' to each element of an array
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(square);

console.log(squaredNumbers); // Output: [1, 4, 9, 16]
