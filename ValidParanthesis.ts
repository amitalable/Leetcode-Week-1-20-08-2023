// https://leetcode.com/problems/valid-parentheses/submissions/
function isValid(s: string): boolean {
  const newString = s;
  const res: string[] = [];
  let i = 0;
  const paranthesisMap = new Map([
    ['}', '{'],
    [')', '('],
    [']', '[']
  ]);
  while (i < s.length) {
    const curr = newString[i++];
    if (
      paranthesisMap.has(curr) &&
      res[res.length - 1] === paranthesisMap.get(curr)
    ) {
      res.pop();
    } else {
      res.push(curr);
    }
  }
  return res.length === 0;
}
