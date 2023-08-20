// https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/
function search(nums: number[], target: number): number {
  let num = nums[0];
  let i = 1;
  let lastElement = -1;
  if (num === target) {
    return 0;
  }

  while (i < nums.length) {
    if (num > nums[i]) {
      lastElement = i - 1;
      break;
    } else if (nums[i] === target) {
      return i;
    } else {
      num = nums[i++];
    }
  }

  for (let i = lastElement + 1; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}
