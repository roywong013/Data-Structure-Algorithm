# Bit Manipulation

### Get Power of 2 without `^` 

```
// gets the 6th bit   (2^5)
var num = 1 << 5; 
// expected output: 32
```


#### Get Bit

Use `>>` to Shift the relevant bit to the zeroth position(最右). Then we use `&` (And operator) with 1 which bit pattern like `00000001`. If the relevant bit is `1`, then return `1`, and otherwise it is `0`.

> See [getBit.js](./getBit.js) for coding details.


#### Set Bit

將指定bit position既bit set做`1`。 <br>
Use `1 << bitPosition` to shift `1` to specific position, which will create a binary number like  `00100`. Then we use `|` (Or operator) that sets specific bit into 1 but it does not affect on other bits of the number.

> See [setBit.js](./setBit.js) for coding details.


#### Clear Bit

將指定bit position既bit set做`0`。 <br>
Use `1 << bitPosition` to shift `1` to specific position, then we use `~` to invert the binary number to be like `11011`. Then we use `&` (And Operator) that clear the specific position bit to become `0` but it does not affect on other bits of the number.

> See [clearBit.js](./clearBit.js) for coding details.

### isEven

For every odd number, the rightmost bit will always be 1. We can check the rightmost bit for determining if the number provided is even.

> See [isEven.js](./isEven.js) for coding details.
