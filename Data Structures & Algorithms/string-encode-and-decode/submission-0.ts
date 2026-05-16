class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map(s => `${s.length}#${s}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res: string[] = [];

        let i = 0;
        while(i < str.length) {
            const separator = str.indexOf('#', i);
            const len = +str.slice(i, separator);
            const wordStart = separator + 1;
            const wordEnd = wordStart + len;
            const word = str.slice(wordStart, wordEnd);
            res.push(word);
            i = wordEnd;
        }
        return res;
    }
}
