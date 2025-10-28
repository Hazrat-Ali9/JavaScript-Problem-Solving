/**
 * Sleep function that pauses execution for a specified duration
 * Returns a Promise that resolves after the given milliseconds
 * Useful for adding delays in async operations or rate limiting
 * 
 * @param {number} millis - Number of milliseconds to sleep
 * @return {Promise<void>} - Promise that resolves after the delay
 * 
 * @example
 * await sleep(1000); // Pauses execution for 1 second
 * console.log('Executed after 1 second');
 */
async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

// Example usage: measure actual sleep time
let t = Date.now();
sleep(100).then(() => {
  console.log('Slept for approximately (ms):', Date.now() - t); 
});

module.exports = sleep;


