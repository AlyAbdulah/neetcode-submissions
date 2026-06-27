class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        maxO = 0
        tempO = 0
        for num in nums:
            if num == 1:
                tempO += 1
                maxO = max(maxO, tempO)
            else:
                tempO = 0
        return maxO