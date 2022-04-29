# Binary Search

先將array sort, 然後搵出中間個個數 與搜尋中既數比較，如果搜尋中既數大d, 就喺右邊堆數搵出中間個數再比較， 直至搵出答案

（如果array為雙數，則可使用中間較細個個數）


<b>可透過[Tree](../data-structures/tree/binary-tree.md)去實現Binary Search</b>


![image](https://user-images.githubusercontent.com/74874696/159127035-a0e39a08-c83d-4f57-8870-2a25dd5fad63.png)

```
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      return mid;
    }

    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
```


### Minimize k , s.t. condition(k) is True:
```
  function binarySearch(arr, val) {
    let left = min(search_space);
    let right = max(search_space);
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if condition(mid) {
        right = mid;
      }
      else {
        left = mid + 1;
      }
    }
    return left;
  }
```


| Big O   |
|---------|
| O(log n)|
