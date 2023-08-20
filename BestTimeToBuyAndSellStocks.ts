//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
function maxProfit(prices: number[]): number {
  let minimumPrice = Math.pow(10, 4) + 1;
  let maxProfit = 0;
  for (let price of prices) {
    if (price < minimumPrice) {
      minimumPrice = price;
    } else {
      maxProfit = Math.max(maxProfit, price - minimumPrice);
    }
  }
  return maxProfit;
}
