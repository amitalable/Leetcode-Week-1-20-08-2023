// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

function lengthOfLongestSubstring(s: string): number {
  const charIndexMap = new Map();

  let maxLen = 0,
    start = 0;
  for (let end = 0; end < s.length; end++) {
    const ch = s[end];
    if (charIndexMap.has(ch) && charIndexMap.get(ch) >= start) {
      start = charIndexMap.get(ch) + 1;
    }
    charIndexMap.set(ch, end);
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}
