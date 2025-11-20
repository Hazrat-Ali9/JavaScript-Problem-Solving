/**
 * Calculate Hamming Distance between two integers
 * The Hamming distance is the number of positions at which the corresponding bits are different
 * 
 * Algorithm:
 * 1. XOR the two numbers - this gives a number with 1s where bits differ
 * 2. Count the number of 1s in the XOR result
 * 3. Uses Brian Kernighan's algorithm: n &= (n-1) removes the rightmost set bit
 * 
 * @param {number} x - First integer
 * @param {number} y - Second integer
 * @return {number} - Hamming distance (count of differing bits)
 * 
 * @example
 * hammingDistance(1, 4) // returns 2
 * // 1 = 0001, 4 = 0100, XOR = 0101 (2 bits different)
 * 
 * hammingDistance(3, 1) // returns 1
 * // 3 = 0011, 1 = 0001, XOR = 0010 (1 bit different)
 * 
 * Time Complexity: O(log n) where n is the larger number
 * Space Complexity: O(1)
 */
const hammingDistance = (x, y) => {
  let dist = 0;
  let n = x ^ y;  // XOR gives 1 where bits differ

  while (n) {
    dist++;        // Increment count for each set bit
    n &= n - 1;    // Remove rightmost set bit
  }

  return dist;
};

// Test cases
console.log('Hamming Distance (1, 4):', hammingDistance(1, 4));   // 2
console.log('Hamming Distance (3, 1):', hammingDistance(3, 1));   // 1
console.log('Hamming Distance (7, 15):', hammingDistance(7, 15)); // 2

module.exports = hammingDistance;

