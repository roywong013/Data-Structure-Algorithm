# Queue

Queue can be build by either array or linked list. However, <b>linked list</b> will be more efficient as queue always need to remove item in first index. <br>
<b>Linked List:O(1) Array:O(n)</b>

<b>Linked list order</b> Should be : 0 < 1 < 2 < 3 < 4 < 5  (頭<中<尾) <br>
<b>Enqueue</b>: Push to the last node (tail) <br>
<b>Dequeue</b>: Remove from the front (head) <br>
<b>Peek</b>: Lookup for the first data



| Enqueue | Dequeue | Peek | Lookup |
|---------|---------|------|--------|
| O(1)    | O(1)    | O(1) | O(n)   |
