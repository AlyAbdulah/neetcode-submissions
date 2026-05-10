class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        res = 0
        charCount = {}
        maxFreq = 0
        l, r = 0, 0

        while r < len(s):
            char = s[r]
            charCount[char] = charCount.get(char, 0) + 1
            maxFreq = max(maxFreq, charCount[char])
            r += 1

            while (r - l) - maxFreq > k:
                charCount[s[l]] -= 1
                l += 1

            res = max(res, r - l)

        return res