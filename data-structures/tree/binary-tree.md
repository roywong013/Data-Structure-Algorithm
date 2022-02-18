
# Binary Tree
In Binary Tree, each node can only have <b>either 0, 1, or 2 children nodes</b>, and each child can only have <b>one parent</b>. <br>
In Linked List, we can create `this.left` and `this.right` for each node in order to create tree nodes.
![image](https://user-images.githubusercontent.com/74874696/154633958-751f2452-305c-4435-add4-71c06fac3783.png)<br>

There are some terms of binary tree,

## Perfect Binary Tree
All the leafs are full, just like below image. <br>
![image](https://user-images.githubusercontent.com/74874696/154635733-91af0341-bde2-4fc5-802d-eb2a07e421b1.png) <br>
There are two interesting property with Perfect Binary Tree:
1. The Number of total nodes on each level doubles as we move down the tree.
2. The number of total nodes in last level = Sum of total nodes in other levels + 1

<br>

## Full Binary Tree
The nodes have either 0 or 2 children nodes, but never 1 child. <br>
![image](https://user-images.githubusercontent.com/74874696/154636005-d9244a8a-fa58-4b12-8eee-27c1626f5ccc.png)


# Binary Search Tree
There are some rules of Binary Search Tree:
* All child nodes in right hand sides must be greater than current node
* Nodes only can have up to 2 children



| Lookup   | Insertion | Deletion  |
|----------|-----------|-----------|
|O(log N)* | O(log N)* | O(log N)* | 

<i>*O(n) if unbalanced</i>
