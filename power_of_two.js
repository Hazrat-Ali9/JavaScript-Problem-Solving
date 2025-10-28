/**
 * Checks if a number is a power of two
 * Uses bitwise AND operation: a power of two in binary has only one bit set
 * n & (n - 1) removes the rightmost bit, result is 0 only for powers of two
 * 
 * @param {number} n - The number to check
 * @return {boolean} - True if n is a power of two, false otherwise
 * 
 * @example
 * isPowerOfTwo(1)  // returns true (2^0)
 * isPowerOfTwo(16) // returns true (2^4)
 * isPowerOfTwo(3)  // returns false
 */
function isPowerOfTwo(n) {
    if (n <= 0) return false;    
    return (n & (n - 1)) === 0;
}

// Test cases
console.log(isPowerOfTwo(1));   // true
console.log(isPowerOfTwo(16));  // true
console.log(isPowerOfTwo(3));   // false   

