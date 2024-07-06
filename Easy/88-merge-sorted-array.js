/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var mPointer = m-1;
    var nPointer = n-1;
    for (var i = nums1.length-1; i >= 0; i--) {
        if (mPointer < 0 || (nPointer >= 0 && nums1[mPointer] < nums2[nPointer])) {
            nums1[i] = nums2[nPointer];
            nPointer--;
        } else {
            nums1[i] = nums1[mPointer];
            mPointer--;
        }
    }
};
