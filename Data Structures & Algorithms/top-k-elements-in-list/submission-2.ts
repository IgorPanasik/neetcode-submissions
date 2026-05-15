class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count: Record<string, number> = {};

        for(const n of nums) {
           count[n] = (count[n] || 0) + 1;
        }

        const buckets: number[][] = Array.from({length: nums.length + 1}, () => []);
        const res: number[] = [];

        for (const [key, v] of Object.entries(count)) {
            buckets[v].push(+key);    
        }

        for(let i = buckets.length - 1; i >= 0; i--) {
            for(const n of buckets[i]) {
                res.push(n);
                if(res.length === k) return res;
            }
        }
    }
}
