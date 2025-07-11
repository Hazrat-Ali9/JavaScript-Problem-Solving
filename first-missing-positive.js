/**
 * @param {number[]} A
 * @return {number}
 */
const firstMissingPositive = A => {
  const n = A.length;

  let i = 0;
  while (i < n) {
    if (A[i] > 0 && A[i] <= n && A[i] !== A[A[i] - 1]) swap(A, i, A[i] - 1);
    else i++;
  }

  i = 0;
  while (i < n && A[i] === i + 1) {
    i++;
  }

  return i + 1;
};

const swap = (A, i, j) => ([A[i], A[j]] = [A[j], A[i]]);


