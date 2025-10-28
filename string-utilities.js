/**
 * String Utility Functions
 * A collection of helpful string manipulation utilities
 */

/**
 * Capitalizes the first letter of a string
 * @param {string} str - Input string
 * @return {string} - String with first letter capitalized
 */
function capitalize(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Converts a string to title case (each word capitalized)
 * @param {string} str - Input string
 * @return {string} - String in title case
 */
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Reverses a string
 * @param {string} str - Input string
 * @return {string} - Reversed string
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Checks if a string is a palindrome
 * @param {string} str - Input string
 * @return {boolean} - True if palindrome, false otherwise
 */
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

/**
 * Truncates a string to a specified length with ellipsis
 * @param {string} str - Input string
 * @param {number} maxLength - Maximum length
 * @return {string} - Truncated string
 */
function truncate(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - 3) + '...';
}

/**
 * Counts the occurrences of each character in a string
 * @param {string} str - Input string
 * @return {Object} - Object with character counts
 */
function countCharacters(str) {
    return str.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
}

// Example usage and tests
console.log('Capitalize:', capitalize('hello world')); // "Hello world"
console.log('Title Case:', toTitleCase('hello world from javascript')); // "Hello World From Javascript"
console.log('Reverse:', reverseString('hello')); // "olleh"
console.log('Is Palindrome:', isPalindrome('A man a plan a canal Panama')); // true
console.log('Truncate:', truncate('This is a very long string', 15)); // "This is a ve..."
console.log('Count Characters:', countCharacters('hello')); // { h: 1, e: 1, l: 2, o: 1 }

module.exports = {
    capitalize,
    toTitleCase,
    reverseString,
    isPalindrome,
    truncate,
    countCharacters
};
