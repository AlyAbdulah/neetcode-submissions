class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
      let adj = {};
      for (let word of words) {
        for (let char of word) {
          adj[char] = new Set()
        }
      }

      for (let i = 0; i < words.length - 1; ++i) {
        let w1 = words[i]
        let w2 = words[i + 1]
        let minLen = Math.min(w1.length, w2.length)
        if (w1.length > w2.length && w1.slice(0, minLen) === w2.slice(0, minLen)) return ""

        for (let j = 0; j < minLen; ++j) {
          if (w1[j] !== w2[j]) {
            adj[w1[j]].add(w2[j])
              break
          }
        }
      }

      let visited = {}
      let res = [];
      
      function dfs(char) {
        if (char in visited) return visited[char];
        visited[char] = true;
        for (let neighChar of adj[char]) {
          if (dfs(neighChar)) return true
        }
        visited[char] = false;
        res.push(char)
      }

      for (let char of Object.keys(adj)) {
        if (dfs(char)) return ""
      }
      res.reverse()
      return res.join("")
    }
}
