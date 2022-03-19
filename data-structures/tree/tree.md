# Tree
* [Binary Tree](./binary-tree.md)


## Traversal 

### Breadth-first Search
Searching the tree data structure <b>level by level</b>. <br>
BFS is better if information show that target node is likely in  <b>upper level</b> node. <br>
<i><b>It need extra memory, 因為需要用pointer去track當前level既所有node既所有children node.</b></i> <br>

![image](https://user-images.githubusercontent.com/74874696/159127864-32a83a22-13eb-434f-a6ba-bce323701318.png)

| Pro           | Con          |
|---------------|--------------|
|Shortest Path  | More Memory  |
|Closer Nodes   |              |


### Depth-first Search

相對Breadth-first Search, Depth-first Search用較少memory <br>
DFS is better if information show that target node is likely in <b>lower level</b> node. <br>

![image](https://user-images.githubusercontent.com/74874696/159127937-7c25548e-7e99-4419-b32c-075bb8399551.png)

| Pro              | Con          |
|------------------|--------------|
| Less memory      | Can get slow |
| Does Path exist? |              |
