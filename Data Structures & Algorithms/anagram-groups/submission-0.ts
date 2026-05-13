class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map: Map <string, string[]> = new Map();

        for(let i = 0; i < strs.length; i++) {
          const word = strs[i];
          const count = new Array(26).fill(0);

          for(const char of word) {
            const index = char.charCodeAt(0) - 97;
            count[index]++;
          }

          const wordKey = count.join(',');
          const group = map.get(wordKey) || [];
          group.push(word);
          map.set(wordKey, group);
        }
        return Array.from(map.values());
    }
}
