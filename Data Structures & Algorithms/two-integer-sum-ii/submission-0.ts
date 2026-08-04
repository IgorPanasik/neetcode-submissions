class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const map: Map<number, number> = new Map();

        for (let i = 0; i < numbers.length; i++) {
            const diff = target - numbers[i];
            const index = map.get(diff);

            if (index !== undefined) {
                return [index, i + 1];
            }
            map.set(numbers[i], i + 1);
        }
        return [];
    }
}
