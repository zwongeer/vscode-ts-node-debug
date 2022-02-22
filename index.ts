// https://leetcode-cn.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
    let ht = new Map<number, number>();
    for (let idx = 0; idx < nums.length; idx++) {
        let val = nums[idx];
        if (ht.has(target - val)) {
            return [idx, ht.get(target - val)];
        }
        ht.set(val, idx);
    }
    return [];
};
console.log(twoSum([2, 7, 11, 15], 9));