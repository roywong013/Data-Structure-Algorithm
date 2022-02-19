# Heap 

Heap is a specialized tree-based data structures. There are two types of heap: Min Heap and Max Heap. In Heap, it use left to right insertion, and thus left and right is not matter, that why lookup is O(n).

<i>In <b>min heap</b>, the value of <b>parent node</b> is less than or equal to the value of <b>both child node</b>.</i><br>

![image](https://user-images.githubusercontent.com/74874696/154785083-a4cef7e2-b879-4217-b8dd-30c4b5edb587.png)
<br><br><br>
<i>In <b>max heap</b>, the value of <b>parent node</b> is greater than or equal to the value of <b>both child node</b></i>.<br>
![image](https://user-images.githubusercontent.com/74874696/154785104-17e27724-011d-4c08-8d91-f70c207c33b0.png)

<br>

| lookup | Insertion | Deletion |
|--------|-----------|----------|
| O(n)   | O(log N)  | O(log N) |
