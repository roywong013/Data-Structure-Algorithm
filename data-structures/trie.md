# Trie

In computer science, a trie, also called digital tree and sometimes radix tree or prefix tree (as they can be searched by prefixes), is a kind of search tree—an ordered tree data structure that is used to store a dynamic set or associative array where the keys are usually strings. Unlike a binary search tree, no node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated. All the descendants of a node have a common prefix of the string associated with that node, and the root is associated with the empty string. Values are not necessarily associated with every node. Rather, values tend only to be associated with leaves, and with some inner nodes that correspond to keys of interest. For the space-optimized presentation of prefix tree, see compact prefix tree.
![image](https://user-images.githubusercontent.com/74874696/154785563-874f4bd6-e003-4393-80a8-703db2c24a08.png)

Trie can save a lot of space. For example, in the above image, we can just save first letter `t` 1 time and we can use it for mutiple words. 
