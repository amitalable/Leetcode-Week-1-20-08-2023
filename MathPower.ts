// https://leetcode.com/problems/powx-n/submissions/
function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 1 / myPow(x, -n);
  } else {
    const halfPow = myPow(x, Math.floor(n / 2));
    const halfPowSquare = halfPow * halfPow;
    return n % 2 === 0 ? halfPowSquare : halfPowSquare * x;
  }
}
