/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit=0;
    if(prices.length<=1) return 0;
    /*Brute force Approach
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            if(prices[i]<prices[j]){
                maxProfit= Math.max(maxProfit,prices[j]-prices[i])
            }
        }
    }
    return maxProfit;
    */ //Time complexity-->O(n^2);Space COmplexity -->O(1)
    //Find the minimun Buy value using Math.min();The max profit is obtained by Math.max(maxProfit,prices[i]-minBuy)
    let minBuyVal=prices[0];
    for(let val of prices){
        minBuyVal=Math.min(minBuyVal,val)
        maxProfit =Math.max(maxProfit,val-minBuyVal)
    }
    return maxProfit;
};
//Time Complexity -->O(n)
//Space Complexity -->O(1)
