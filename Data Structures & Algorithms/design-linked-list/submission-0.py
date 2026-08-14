class NodeList():
  def __init__(self, val):
    self.val = val
    self.next = None
    self.prev = None

class MyLinkedList:
  def __init__(self):
    self.left = NodeList(0)
    self.right = NodeList(0)
    self.left.next = self.right
    self.right.prev = self.left

  def get(self, index: int) -> int:
    cur = self.left.next
    while cur and index > 0:
      cur = cur.next
      index = index - 1
    if index == 0 and cur and cur is not self.right:
      return cur.val
    return -1

  def addAtHead(self, val: int) -> None:
    nHead = NodeList(val)
    nHead.next = self.left.next
    nHead.prev = self.left
    (self.left.next).prev = nHead
    self.left.next = nHead

  def addAtTail(self, val: int) -> None:
    nTail = NodeList(val)
    nTail.next = self.right
    nTail.prev = self.right.prev
    (self.right.prev).next = nTail
    self.right.prev = nTail

  def addAtIndex(self, index: int, val: int) -> None:
    cur = self.left.next
    while cur and index > 0:
      cur = cur.next
      index -= 1
    if index == 0 and cur:
      nHead = NodeList(val)
      nHead.next = cur
      nHead.prev = cur.prev
      (cur.prev).next = nHead
      cur.prev = nHead

  def deleteAtIndex(self, index: int) -> None:
    cur = self.left.next
    while cur and index > 0:
      cur = cur.next
      index -= 1
    if index == 0 and cur and cur is not self.right:
      (cur.prev).next = cur.next
      (cur.next).prev = cur.prev
      cur.prev = None
      cur.next = None
        


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)