# Selection Sort

> <b>基本上唔會用得著Selection Sort</b>

![](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)
1. Loop through the list and find out the smallest item, then swap with the first index item
2. Repeat step1 and swap the second smallest item with the second index item
3. Repeat until finish sorting.


```
function selectionSort(array) {
  for (let i = 0 ; i < array.length; i++){
    let smallest = i;
    for (let j = i + 1; j < array.length; j++){
      if (array[j] < array[smallest]){
        smallest = j;
      }
    }
    if (i != smallest){
      //Swap Item
      let temp = array[i];
      array[i] = array[smallest];
      array[smallest] = temp;
    }
  }
  return array;
}
```

| Best Case | Worst Case |
|-----------|------------|
| Ω(n^2)    | O(n^2)     |
