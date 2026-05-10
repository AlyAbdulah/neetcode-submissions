class Solution {
    /**
     * @param {number[][]} grid
     */

    islandsAndTreasure(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const INF = 2147483647;
        const directions = [
            [0, 1], [1, 0], [0, -1], [-1, 0]
        ];

        const queue = [];

        // Initialize the queue with all treasure chests
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 0) {
                    queue.push([i, j]);
                }
            }
        }

        // BFS to find the shortest path to a treasure chest
        while (queue.length > 0) {
            const [x, y] = queue.shift();
            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;
                if (newX >= 0 && newX < m && newY >= 0 && newY < n && grid[newX][newY] === INF) {
                    grid[newX][newY] = grid[x][y] + 1;
                    queue.push([newX, newY]);
                }
            }
        }
    }
}
