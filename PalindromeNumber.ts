// https://leetcode.com/problems/palindrome-number/submissions/

function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  if (x < 10) {
    return true;
  }
  let newx = x;
  const data: number[] = [];
  while (newx) {
    const t = newx % 10;
    data.push(t);
    newx = (newx - t) / 10;
  }
  const len = data.length;
  for (let i = 0; i < len / 2; i++) {
    if (data[i] !== data[len - i - 1]) {
      return false;
    }
  }
  return true;
}
