/**
 * Create a counter function that returns incrementing values
 * This is a closure example where the inner function maintains access to the outer function's variable
 * 
 * @param {number} n - Initial value for the counter
 * @return {Function} - A function that returns the next counter value on each call
 * 
 * @example
 * const counter = createCounter(10);
 * console.log(counter()); // 10
 * console.log(counter()); // 11
 * console.log(counter()); // 12
 */
var createCounter = function(n) {
    return function() {
        return n++;  // Returns current value, then increments for next call
    };
};

// Example usage demonstrating the counter
const myCounter = createCounter(5);
console.log('First call:', myCounter());   // 5
console.log('Second call:', myCounter());  // 6
console.log('Third call:', myCounter());   // 7

module.exports = createCounter;

