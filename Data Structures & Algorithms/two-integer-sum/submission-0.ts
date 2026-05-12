class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map: Map<number, number> = new Map(); 

        for(let i = 0; i < nums.length; i++) {
            const partner = target - nums[i];

            if(map.has(partner)) {
                return [i, map.get(partner)]
            }
            map.set(nums[i], i);
        }
    }
}
