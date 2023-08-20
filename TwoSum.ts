// https://leetcode.com/problems/two-sum/submissions/

function twoSum(nums: number[], target: number): number[] {
  const visited = {};

  for (let num_idx in nums) {
    const data = target - nums[num_idx];
    if (visited.hasOwnProperty(data)) {
      return [visited[data], num_idx];
    } else {
      visited[nums[num_idx]] = num_idx;
    }
  }
  return [-1, -1];
}
