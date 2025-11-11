/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue;
            }

            const sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }

    throw new Error("Invalid nums parameter");
}
