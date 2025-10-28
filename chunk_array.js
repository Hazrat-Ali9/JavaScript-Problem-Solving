/**
 * Splits an array into chunks of a specified size
 * Useful for batch processing or pagination
 * 
 * @param {Array} arr - The array to chunk
 * @param {number} size - The size of each chunk
 * @return {Array[]} - Array of chunks
 * 
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 * chunk(['a', 'b', 'c', 'd'], 3) // [['a', 'b', 'c'], ['d']]
 */
function chunk(arr, size) {
  const result = [];
  
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  
  return result;
}

// Test cases
console.log('Chunk [1,2,3,4,5] by 2:', chunk([1, 2, 3, 4, 5], 2));
console.log('Chunk [1,2,3,4,5,6] by 3:', chunk([1, 2, 3, 4, 5, 6], 3));
console.log('Chunk ["a","b","c","d"] by 2:', chunk(['a', 'b', 'c', 'd'], 2));

module.exports = chunk;

