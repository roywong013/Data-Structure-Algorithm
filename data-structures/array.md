# Array

## Static Array
> For some Langages (e.g. C, C++), we need to size the array in advance. If there is appending items, then we need to resize the array for having more memory to store items.

## Dynamic Array
>Dynamic Array means that we do not need to care about <b>sizing</b>. The languages (e.g. JavaScript, Python) will automatally arrange the size and memory. 
### Time Complexities
| Access  | Search | Insertion | Deletion | Append |
| ------- | -------| --------- | -------- |--------|
| O(1)    | O(n)   | O(n)      | O(n)     |O(1)*   |

<i>*can be O(n) if the size of original array do not have enough memory to append a new item. </i>
