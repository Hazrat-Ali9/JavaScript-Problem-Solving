/**
 * Find Duplicate Number
 * Given an array of integers containing n + 1 integers where each integer is in the range [1, n] inclusive,
 * there is only one repeated number. Find and return this duplicate number.
 * 
 * @param {number[]} nums - Array of integers
 * @return {number} - The duplicate number
 * 
 * Solution uses Floyd's Cycle Detection Algorithm (Tortoise and Hare)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var findDuplicate = function(nums) {
    // Phase 1: Find intersection point in the cycle
    let slow = nums[0];
    let fast = nums[0];
    
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    // Phase 2: Find the entrance to the cycle (the duplicate number)
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return fast;
};

/**
 * Alternative solution using Set
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var findDuplicateWithSet = function(nums) {
    const seen = new Set();
    
    for (let num of nums) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }
    
    return -1;
};

// Test cases
console.log('Using Floyd\'s Algorithm:');
console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3
console.log(findDuplicate([1, 1]));          // Output: 1

console.log('\nUsing Set:');
console.log(findDuplicateWithSet([1, 3, 4, 2, 2])); // Output: 2
console.log(findDuplicateWithSet([3, 1, 3, 4, 2])); // Output: 3
console.log(findDuplicateWithSet([1, 1]));          // Output: 1

module.exports = { findDuplicate, findDuplicateWithSet };
