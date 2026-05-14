class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map: Map<string, string[]> = new Map();

        for(const word of strs) {
            const count = new Array(26).fill(0);

            for(const char of word) {
                count[char.charCodeAt(0) - 97]++;
            }
            const key = String.fromCharCode(...count);
            const group = map.get(key) || [];
            group.push(word);
            map.set(key, group);
        }
        return [...map.values()];
    }
}
