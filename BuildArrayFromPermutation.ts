// https://leetcode.com/problems/build-array-from-permutation/submissions/
function buildArray(nums: number[]): number[] {
  let ans = new Array(nums.length);
  for (let i in nums) {
    ans[i] = nums[nums[i]];
  }
  return ans;
}
