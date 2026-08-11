class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let res = 0;
        let l = 0;
        let r = height.length - 1;
        let lMax = 0;
        let rMax = 0;

        while (l < r) {
            if (height[l] < height[r]) {
                if (height[l] >= lMax) {
                    lMax = height[l];
                } else {
                    res += lMax - height[l];
                }
                l++;
            } else {
                if (height[r] >= rMax) {
                    rMax = height[r];
                } else {
                    res += rMax - height[r];
                }
                r--;
            }
        }
        return res;
    }
}
