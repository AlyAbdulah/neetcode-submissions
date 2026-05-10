class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (n === 0) return true
        let graph = Array.from(Array(n), () => [])
        for (let [a,b] of edges) {
            if (!graph[a]) graph[a] = []
            if (!graph[b]) graph[b] = []
            graph[a].push(b)
            graph[b].push(a)
        }
        const visit = new Set()

        function dfs(a, prev) {
            if (visit.has(a)) return false;
            visit.add(a)
            for (const crs of graph[a]) {
                if (crs === prev) continue
                if (!dfs(crs, a)) return false
            }
            return true
        }
        return dfs(0, -1) && n == visit.size
    }
}