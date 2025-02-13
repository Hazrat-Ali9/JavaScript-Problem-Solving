/**
 * @param {number[][]} board
 * @return {number[][]}
 */
const candyCrush = board => {
  const m = board.length;
  const n = board[0].length;

  let shouldContinue = false;

  // Crush horizontally
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n - 2; j++) {
      const v = Math.abs(board[i][j]);
      if (v && v === Math.abs(board[i][j + 1]) && v === Math.abs(board[i][j + 2])) {
        board[i][j] = board[i][j + 1] = board[i][j + 2] = -v;
        shouldContinue = true;
      }
    }
  }

  // Crush vertically
  for (let i = 0; i < m - 2; i++) {
    for (let j = 0; j < n; j++) {
      const v = Math.abs(board[i][j]);
      if (v && v === Math.abs(board[i + 1][j]) && v === Math.abs(board[i + 2][j])) {
        board[i][j] = board[i + 1][j] = board[i + 2][j] = -v;
        shouldContinue = true;
      }
    }
  }

  // Drop vertically
  for (let j = 0; j < n; j++) {
    let row = m - 1;
    for (let i = m - 1; i >= 0; i--) {
      if (board[i][j] >= 0) {
        board[row--][j] = board[i][j];
      }
    }
    for (let i = row; i >= 0; i--) {
      board[i][j] = 0;
    }
  }

  return shouldContinue ? candyCrush(board) : board;
};

export { candyCrush };
