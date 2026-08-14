class ListNode():
  def __init__(self, val: str):
    self.val = val
    self.next = None
    self.back = None

class BrowserHistory:

    def __init__(self, homepage: str):
      self.history = ListNode(homepage)

    def visit(self, url: str) -> None:
      nVisit = ListNode(url)
      nVisit.back = self.history
      self.history.next = nVisit
      self.history = self.history.next

    def back(self, steps: int) -> str:
      cur = self.history
      while cur and steps > 0:
        steps = steps - 1
        cur = cur.back if cur.back else cur
      self.history = cur
      return self.history.val

    def forward(self, steps: int) -> str:
      cur = self.history
      while cur and steps > 0:
        steps = steps - 1
        cur = cur.next if cur.next else cur
      self.history = cur
      return self.history.val


# Your BrowserHistory object will be instantiated and called as such:
# obj = BrowserHistory(homepage)
# obj.visit(url)
# param_2 = obj.back(steps)
# param_3 = obj.forward(steps)