# Doubly linked list
> Doubly linked list have pointers in both `next` and `prev`. It can be faster to lookup data.
> 
![Image](https://camo.githubusercontent.com/3b6b800482771be35813d65625d556f6225d2a3d694104e74e94e3511420288f/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f352f35652f446f75626c792d6c696e6b65642d6c6973742e737667)

### Pros:
* Easier to delete because we can find the previous node easily

### Cons:
* Required more memorys
* More Complex


### Time Complexity

| Access | Search | Insertion | Deletion | Append | Prepend |
|--------|--------|-----------|----------|--------|---------|
| O(n)   | O(n)*  | O(n)      | O(n)     | O(1)   | O(1)    |

<i>*實際上可以係O(n/2)</i>
