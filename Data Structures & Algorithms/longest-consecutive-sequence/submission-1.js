class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        const set = new Set(nums);
        let res = 0;

        for(const n of set) {
        let currentStreak = 1;
        if(!set.has(n - 1)){
            while(set.has(n + currentStreak)) {
                currentStreak++;
            }
            res = Math.max(res, currentStreak)
        }
      }
        return res;
    }
}
