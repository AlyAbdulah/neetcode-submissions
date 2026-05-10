class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for (const str of strs) {
            res += `${str.length}^${str}`
        }
        return res;
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] != "^") {
                j += 1
            }
            const wordLen = parseInt(str.slice(i, j))
            const word = str.slice(j+1, j+1+wordLen).toString()
            res.push(word)
            i = j + 1 + wordLen
        }
        return res
    }
}