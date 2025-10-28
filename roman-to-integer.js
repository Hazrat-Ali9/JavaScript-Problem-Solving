/**
 * Convert Roman numerals to integer
 * Roman numerals are represented by seven symbols: I, V, X, L, C, D, M
 * 
 * Rules:
 * - Symbols are generally ordered from largest to smallest (left to right)
 * - When a smaller symbol appears before a larger one, subtract it (e.g., IV = 4, IX = 9)
 * - Otherwise, add the values
 * 
 * @param {string} s - Roman numeral string
 * @return {number} - Integer value
 * 
 * @example
 * romanToInt("III")     // 3
 * romanToInt("IV")      // 4
 * romanToInt("IX")      // 9
 * romanToInt("LVIII")   // 58 (L=50, V=5, III=3)
 * romanToInt("MCMXCIV") // 1994 (M=1000, CM=900, XC=90, IV=4)
 * 
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(1)
 */
const romanToInt = s => {
  if (!s || s.length === 0) {
    return 0;
  }

  const map = new Map([
    ['I', 1], 
    ['V', 5], 
    ['X', 10], 
    ['L', 50], 
    ['C', 100], 
    ['D', 500], 
    ['M', 1000]
  ]);

  let i = s.length - 1;
  let result = map.get(s[i]);

  while (i > 0) {
    const curr = map.get(s[i]);
    const prev = map.get(s[i - 1]);

    // If previous value is greater or equal, add it
    // If previous value is smaller, subtract it (subtractive notation)
    if (prev >= curr) {
      result += prev;
    } else {
      result -= prev;
    }

    i--;
  }

  return result;
};

// Test cases
console.log('III:', romanToInt('III'));         // 3
console.log('IV:', romanToInt('IV'));           // 4
console.log('IX:', romanToInt('IX'));           // 9
console.log('LVIII:', romanToInt('LVIII'));     // 58
console.log('MCMXCIV:', romanToInt('MCMXCIV')); // 1994

module.exports = romanToInt;
