class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const alphanumerical = s.replace(/[^a-zA-Z0-9]/g, "").toLocaleLowerCase();
        let lastCharIdx = alphanumerical.length - 1;

        for (let i = 0; i < alphanumerical.length; i++) {
            if (alphanumerical[i] !== alphanumerical[lastCharIdx]) {
                return false;
            }
            lastCharIdx--;
        }
        return true;
    }
}
