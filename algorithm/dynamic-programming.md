# Dynamic Programming

將function property value與其得出既result儲存入hash table `cache`, 當遇到重覆既property value時，就可以省卻中間run function得出同樣結果既時間  (呢個方法稱為<b>caching</b>)

* 缺點: 可能會用更多space complexity

例子:
```
let cache = {};
function memoizatedAddTo80(n) {
   if (n in cache) {
      return cache[n];
   }
   else {
      console.log("long time"); // run function時可能需要long time
      cache[n] = n + 80;
   }
}
```


### Closure

將`cache` 避免放喺global scope, 用closure可以將`cache` 放入function入面，然後用一個global variable去reference 該function

例子:
```
function memoizedAddto80() {
   let cache = {};
   return function(n) {
      if (n in cache){
         return cache[n];
      }
      else {
         console.log("long time");
         cache[n] = n + 80;
         return cache[n];
      }
   }
}

const memoized = memoizedAddTo80();

```