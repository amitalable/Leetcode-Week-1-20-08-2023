// https://leetcode.com/problems/contains-duplicate/submissions/
function containsDuplicate(nums: number[]): boolean {
  const numSet = new Set();

  for (const num of nums) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
}
