/**
 * Check if a number is a palindrome
 * A palindrome number reads the same backward as forward
 * 
 * Solution approach: Convert to string and compare with reversed version
 * Alternative approach (not implemented): Reverse the number mathematically without string conversion
 * 
 * @param {number} x - The number to check
 * @return {boolean} - True if palindrome, false otherwise
 * 
 * @example
 * isPalindrome(121)   // true (reads as 121 both ways)
 * isPalindrome(-121)  // false (negative numbers are not palindromes)
 * isPalindrome(10)    // false (reads as 01 backward)
 * isPalindrome(12321) // true
 * 
 * Time Complexity: O(n) where n is the number of digits
 * Space Complexity: O(n) for string conversion
 */
var isPalindrome = function(x) {
    // Negative numbers are not palindromes
    if (x < 0) return false;
    
    let str = x.toString();
    let reversed = str.split('').reverse().join('');

    return str === reversed;
};

// Test cases
console.log('isPalindrome(121):', isPalindrome(121));     // true
console.log('isPalindrome(-121):', isPalindrome(-121));   // false
console.log('isPalindrome(10):', isPalindrome(10));       // false
console.log('isPalindrome(12321):', isPalindrome(12321)); // true
console.log('isPalindrome(0):', isPalindrome(0));         // true

module.exports = isPalindrome;
    

