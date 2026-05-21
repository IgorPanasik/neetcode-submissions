class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Array(9).fill(0);
        const cols = new Array(9).fill(0);
        const box = new Array(9).fill(0);

        for(let r = 0; r < board.length; r++) {
            for(let c = 0; c < board.length; c++) {
                const val = board[r][c];
                if(val === '.') continue;

                const num = parseInt(val);
                const position = 1 << num;
                const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if((rows[r] & position) !==0 
                || (cols[c] & position) !==0 
                || (box[b] & position) !== 0) {
                    return false;
                }
                rows[r] |= position;
                cols[c] |= position;
                box[b] |= position;
            }
           
        }
         return true;
    }
}
