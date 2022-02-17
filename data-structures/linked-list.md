# Linked List

![Linked List img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d584dacf-f019-460a-b590-91ddf41fe19b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220215T154604Z&X-Amz-Expires=86400&X-Amz-Signature=e0022cba7dcb2b9d5e9f8d09e9887c942f66fad5cf484e5a1b15d16ab457de08&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

* 使用node去記錄、表示、儲存data，並利用每個node既pointer指向下一個node。藉此將多個node串連起來， 形成Linked list
* 以`null`代表linked list終點
* 第一個node稱為`head` , 最後一個node稱為`tail` , `tail` 既pointer為`null`

<details>
  <summary>適用時機:</summary>
  1. 無法預計資料數量: 使用Linked list唔需要考慮resize問題 <br>
  2. 需要頻繁地新增/刪除資料時 <br>
  3. 唔需要快速查詢data
</details>
<br><br>

### Time Complexity

| Access | Search | Prepend | Append | Insertion | Deletion |
|--------|--------|---------|--------|-----------|----------|
| O(n)   | O(n)   | O(1)    | O(1)   | O(n)      | O(n)     |
 
