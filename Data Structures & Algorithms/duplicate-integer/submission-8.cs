public class Solution {
    public bool hasDuplicate(int[] nums) {
        if(nums == null) {
            throw new ArgumentNullException(nameof(nums));
        }

        Array.Sort(nums);
        for(int i = 1; i < nums.Length; i++) {
            if(nums[i] == nums[i - 1]) {
                return true;
            }
        }
        return false;
    }
}