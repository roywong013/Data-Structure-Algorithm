# Bit Manipulation

### Get Power of 2 without `^` 

```
// gets the 6th bit   (2^5)
var num = 1 << 5; 
// expected output: 32
```


### Get Bit

Use `>>` Shift the relevant bit to the zeroth position(最右). Then we use `&` operation with 1 which bit pattern like `00000001`. If the relevant bit is `1`, then return `1`, and otherwise it is `0`.

> See [getBit.js](./getBit.js) for coding details.