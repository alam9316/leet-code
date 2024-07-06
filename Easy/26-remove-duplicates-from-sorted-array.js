/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var k = 1;
    var lastSeenValue = nums[0];
    for (var i in nums) {
        if (lastSeenValue < nums[i]) {
            nums[k] = nums[i];
            lastSeenValue = nums[i];
            k++;
        }
    }
    return k;
};
