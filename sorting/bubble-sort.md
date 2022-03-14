# Bubble Sort

> <b>基本上係唔會用得著Bubble Sort</b>

泡沫排序演算法的運作如下：

1. 比較相鄰的元素。如果第一個比第二個大，就交換它們兩個。
2. 對每一對相鄰元素作同樣的工作，從開始第一對到結尾的最後一對。這步做完後，最後的元素會是最大的數。
3. 針對所有的元素重複以上的步驟，除了最後一個。
4. 持續每次對越來越少的元素重複上面的步驟，直到沒有任何一對數字需要比較。

![image](https://upload.wikimedia.org/wikipedia/commons/2/2a/Bubble_sort_with_flag.gif)

```
function bubbleSort(array) {
  let n = array.length;
  while (n > 1) {
    for (let i = 0; i < n - 1; i++){
      if (array[i] > array[i + 1]){
        //Swap numbers
        let temp = numbers[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    n--;
  }
  return array;
}
```
