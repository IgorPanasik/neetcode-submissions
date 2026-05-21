class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const set = new Set();

        for(let r = 0; r < board.length; r++){
            for(let c = 0; c < board.length; c++) {
                const cell = board[r][c];
                if(cell === '.') continue;
                const box = Math.floor((r / 3)) * 3 + Math.floor((c / 3));

                if(set.has(`r-${r}-${cell}`) 
                || set.has(`c-${c}-${cell}`) 
                || set.has(`box-${box}-${cell}`)) {
                    return false;
                }
                set.add(set.add(`r-${r}-${cell}`));
                set.add(set.add(`c-${c}-${cell}`));
                set.add(set.add(`box-${box}-${cell}`));
            }
        }
        return true;
    }
}
