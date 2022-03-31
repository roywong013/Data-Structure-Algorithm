# Bit Manipulation

### Get Power of 2 without `^` 

```
// gets the 6th bit   (2^5)
var num = 1 << 5; 
// expected output: 32
```


#### Get Bit

提取指定bit position既bit value (`1` / `0`) <br>
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

#### isEven

For every odd number, the rightmost bit will always be 1. We can check the rightmost bit for determining if the number provided is even.

> See [isEven.js](./isEven.js) for coding details.

#### isPositive

This method is for determining if the number provided is positive. For every positive number, the leftmost bit is always `0` and negative number is `1`. However, if the number provided is zero or negative zero, it should still return `false`.

> See [isPositive.js](./isPositive.js) for coding details.

#### Multiply By Two

This method shifts original number by one bit to the left.
Thus all binary number components (powers of two) are being
multiplying by two and thus the number itself is being
multiplied by two.

```
Before the shift
Number: 0b0101 = 5
Powers of two: 0 + 2^2 + 0 + 2^0

After the shift
Number: 0b1010 = 10
Powers of two: 2^3 + 0 + 2^1 + 0
```

> See [multiplyByTwo.js](multiplyByTwo.js) for further details.

#### Divide By Two

This method shifts original number by one bit to the right.
Thus all binary number components (powers of two) are being
divided by two and thus the number itself is being
divided by two without remainder.

```
Before the shift
Number: 0b0101 = 5
Powers of two: 0 + 2^2 + 0 + 2^0

After the shift
Number: 0b0010 = 2
Powers of two: 0 + 0 + 2^1 + 0
```

> See [divideByTwo.js](divideByTwo.js) for further details.
