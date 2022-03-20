# Graph

Linked List, Tree are types of graph. 
If the vertexs(nodes) have direction, then we call that <b>directed</b>. <br>
If the vertexs's edges have weights, we call that <b>weighted</b>. <br>
If there is cycle between any vertexs, then we call that <b>cyclic</b>, otherwise, we call that <b>acyclic</b>. <br> 
![image](https://user-images.githubusercontent.com/74874696/154835589-ac300e28-cdc4-486c-8777-c635fa477d3c.png)

<b>Edge list</b>:
```
const graph = [[0, 1], [0, 4], [1, 4], [1, 3], [4, 3], [3, 2], [1, 2]]`
```

<b>Adjacent list</b>:
```
let graph = {
  "0": [1, 4],
  "1": [0, 2, 3, 4],
  "2": [1, 3],
  "3": [1, 2, 4],
  "4": [0, 1, 3]
}
```

<b>Adjacent Matrix</b>:
```
let graph = [
  [0, 1, 0, 0, 1],
  [1, 0, 1, 1, 1],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 0, 1],
  [1, 1, 0, 0, 0]
]
```

<br><br><br>

### Dijkstra Algorithm & Bellman-Ford Algorithm

如果需要找出shortest path, 而edges have weighted, 則可以考慮利用Dijkstra Algorithm / Bellman-Ford Algorithms

* <b>Bellman-Ford Algorithm:</b> 如果有negative weight, 則使用Bellman-Ford Algorithm  (但較慢 O(n^2))
* <b>Dijkstra Algorithm:</b> 如果無negative weight, 就可以使用Dijkstra Algorithm (較快)
