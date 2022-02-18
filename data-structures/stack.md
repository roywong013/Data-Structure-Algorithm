# Stack
<b>Last In First Out</b>, like stacking boxs. <br>
Stack can be build either array or linked list. Both are fairly work in stack.

While writing stack by linked list, we should push the top stack to `head` and it can be easily pop out by O(1)(由高至低). If we push the top stack to the `tail`, we will need O(n) to pop out. 

If we use Array for Stack, we can just build a `Stack` class and use built-in function `push` and `pop` to build the method. <br>
Peek: `this.array[this.array.length-1]`

| Pop | Push | Peek |
|-----|------|------|
| O(1)| O(1) | O(1) |

Peek: view the top most data
