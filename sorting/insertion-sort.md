# Insertion Sort

When sorting small dataset / dataset that are nearly sorted, then using Insertion Sort will be very fast.

![](https://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif)

將第i個item加入「前i−1個排序過」既list<br>

3 case:
  1. <b>item i > i-1</b>: 直接放喺index i
  2. <b> item i < item 1</b>: 將item i放喺index 1
  3. <b> item 1 < item i < item i-1</b> : 搵出item i 應該放既位置

| Best Case | Worst Case |
|-----------|------------|
| Ω(n)      | O(n^2)     |
