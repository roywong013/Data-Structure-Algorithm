# Binary Search

先將array sort, 然後搵出中間個個數 與搜尋中既數比較，如果搜尋中既數大d, 就喺右邊堆數搵出中間個數再比較， 直至搵出答案

（如果array為雙數，則可使用中間較細個個數）


<b>可透過[Tree](../data-structures/tree/binary-tree.md)去實現Binary Search</b>


![image](https://user-images.githubusercontent.com/74874696/159127035-a0e39a08-c83d-4f57-8870-2a25dd5fad63.png)


| Big O   |
|---------|
| O(log n)|
