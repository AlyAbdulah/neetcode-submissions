class Solution:
    def countStudents(self, students: list[int], sandwiches: list[int]) -> int:
        res = len(students)
        chs = {
            0: 0,
            1: 0
        }
        for s in students:
            chs[s] = chs.get(s, 0) + 1
        print(chs)
        for s in sandwiches:
            if chs[s] > 0:
                chs[s] -= 1
                res -= 1
            else:
                return res

        return res