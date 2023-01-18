/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*Values need not be consecutive
exactly one solution will be present
array length will be >=2
Brute force approch: take one for loop(starts from index i =0; i<nums.length;i++) and then inside it call one more for loop with j value starts from  (j=i+1;j<nums.length;j++). Indes that check if nums[i]+nums[j]===target. If it is return [i,j] else continue;
Time COmplexity -->O(n^2)
Space Complexity-->O(1)
*/
var twoSum = function(nums, target) {
    if(nums.length<=1) return [];
    let map = {}; //Take na empty map object
    //nums[i]+nums[j]=target. We can rewrite it as nums[j]=target-nums[i]
    for(let i=0;i<nums.length;i++){
        let difference = target-nums[i]; //calculating the difference
        if(map[difference]!==undefined){ //if the differnce is already present then we can return the indexes
            return [map[difference],i];
        }   
        else{
            map[nums[i]]=i;//We are storing nums[i]=i
        } 
    }
}; 
//Time complexity using Map-->O(n).In the worst case we will iterate through each and every value in the array. For fetching the items in map it will be O(1)
//Space Complexity -->O(n) 
