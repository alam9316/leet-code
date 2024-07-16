/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const countHashTable = {}
    nums.forEach((num) => {
        if (countHashTable[num])
            countHashTable[num]++
        else
            countHashTable[num] = 1
    })
    let majorityCount = 0
    let majority 
    for (let key in countHashTable) {
        if (countHashTable[key] > majorityCount) {
            majority = key
            majorityCount = countHashTable[key]
        }
    }
    return majority
};
