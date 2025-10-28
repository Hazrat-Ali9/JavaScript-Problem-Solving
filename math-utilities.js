/**
 * Math Utility Functions
 * A collection of useful mathematical operations
 */

/**
 * Calculates the factorial of a number
 * @param {number} n - Non-negative integer
 * @return {number} - Factorial of n
 */
function factorial(n) {
    if (n < 0) throw new Error('Factorial is not defined for negative numbers');
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

/**
 * Calculates the greatest common divisor (GCD) using Euclidean algorithm
 * @param {number} a - First number
 * @param {number} b - Second number
 * @return {number} - GCD of a and b
 */
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

/**
 * Calculates the least common multiple (LCM)
 * @param {number} a - First number
 * @param {number} b - Second number
 * @return {number} - LCM of a and b
 */
function lcm(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcd(a, b);
}

/**
 * Checks if a number is prime
 * @param {number} n - Number to check
 * @return {boolean} - True if prime, false otherwise
 */
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Generates Fibonacci sequence up to n terms
 * @param {number} n - Number of terms to generate
 * @return {number[]} - Array of Fibonacci numbers
 */
function fibonacciSequence(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

/**
 * Calculates the nth Fibonacci number efficiently
 * @param {number} n - Position in Fibonacci sequence (0-indexed)
 * @return {number} - nth Fibonacci number
 */
function fibonacci(n) {
    if (n <= 1) return n;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Example usage and tests
console.log('Factorial of 5:', factorial(5)); // 120
console.log('GCD(48, 18):', gcd(48, 18)); // 6
console.log('LCM(12, 18):', lcm(12, 18)); // 36
console.log('Is 17 prime?', isPrime(17)); // true
console.log('Is 20 prime?', isPrime(20)); // false
console.log('First 10 Fibonacci numbers:', fibonacciSequence(10)); // [0,1,1,2,3,5,8,13,21,34]
console.log('10th Fibonacci number:', fibonacci(10)); // 55

module.exports = {
    factorial,
    gcd,
    lcm,
    isPrime,
    fibonacci,
    fibonacciSequence
};
