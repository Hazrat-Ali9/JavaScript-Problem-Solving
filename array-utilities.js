/**
 * Array Utility Functions
 * A collection of helpful array manipulation utilities
 */

/**
 * Removes duplicate elements from an array
 * @param {Array} arr - Input array
 * @return {Array} - Array with unique elements
 */
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

/**
 * Shuffles an array randomly using Fisher-Yates algorithm
 * @param {Array} arr - Input array
 * @return {Array} - Shuffled array
 */
function shuffleArray(arr) {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

/**
 * Flattens a nested array to a single level
 * @param {Array} arr - Nested array
 * @return {Array} - Flattened array
 */
function flattenArray(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), 
        []
    );
}

/**
 * Groups array elements by a key function
 * @param {Array} arr - Input array
 * @param {Function} keyFn - Function to extract grouping key
 * @return {Object} - Object with grouped elements
 */
function groupBy(arr, keyFn) {
    return arr.reduce((acc, item) => {
        const key = keyFn(item);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
}

// Example usage
console.log('Remove Duplicates:', removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log('Shuffle:', shuffleArray([1, 2, 3, 4, 5]));
console.log('Flatten:', flattenArray([1, [2, [3, 4], 5], 6]));
console.log('Group By:', groupBy([1, 2, 3, 4, 5, 6], x => x % 2 === 0 ? 'even' : 'odd'));

module.exports = { removeDuplicates, shuffleArray, flattenArray, groupBy };
