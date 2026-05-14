class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map: Map<number, number> = new Map();
        for(const n of nums) {
            map.set(n, (map.get(n) || 0) + 1);
        }
        const buckets: number[][] = Array.from({length: nums.length + 1}, () => []);

        for(const [key, value] of map.entries()){
            buckets[value].push(key);
        }

        const result: number[] = [];
        for(let i  = buckets.length - 1; i >= 0; i--) {
            for(const num of buckets[i]) {
            result.push(num);
            if(result.length === k) return result;
            }
        }
    }
}
