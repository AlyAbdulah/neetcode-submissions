class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const par = new Array(n).fill(0).map((_, index) => index)
        const rank = new Array(n).fill(1)

        function find(node) {
            let p = node;
            while (p != par[p]) {
                p = par[par[p]]
                p = par[p]
            }
            console.log(p)
            return p
        }

        function union(n1, n2) {
            const [p1, p2] = [find(n1), find(n2)]

            if (p1 == p2) return 0;
            if (p1 > p2) {
                par[p2] = p1
                rank[p1] += rank[p2]
            } else {
                par[p1] = p2
                rank[p2] += rank[p1]
            }
            return 1;
        }
        let res = n;
        for (const [a, b] of edges) {
            res -= union(a, b)
        }
        return res;
    }
}
