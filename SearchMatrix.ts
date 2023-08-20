// https://leetcode.com/problems/search-a-2d-matrix/submissions/

function searchMatrix(matrix: number[][], target: number): boolean {
  let rowLength = matrix.length;
  let colLength = matrix[0].length;

  for (let i = 0; i < rowLength; i++) {
    if (matrix[i][colLength - 1] < target) {
      continue;
    }
    for (let j = 0; j < colLength; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
}
