---
title: 'DataLab实验报告'
publishDate: '2025-03-05'
updatedDate: '2025-03-05'
description: 'CSAPP DataLab实验解析'
tags:
  - CSAPP
  - WhuCS
language: '中文'
---

## 1.bitOr

```c
int bitOr(int x, int y) {
  return ~(~x & ~y);
}
```

用&和~实现或运算。或运算为假当且仅当x,y均为假，只需要对~x和~y进行与运算即可判断是否x,y都为假

## 2.anyEvenBit

```c
int anyEvenBit(int x) {
  int mask = 0x55 | 0x55<<8;
  int mask2 = mask << 16;
  return !!(x &(mask | mask2));
}
```

只需要用一个所有偶数位为1的掩码对x进行与运算，如果为0，则偶数位上不存在1，否则存在

## 3.rotateLeft

```c
int rotateLeft(int x, int n) {
  return (x<<n|(x>>(32+(~n+1)) & ((1<<n)+(~1+1))));
}
```

题目要求实现一个环形的左移，即要考虑溢出的高位应该填充到低位上。`x<<n`会将高位截断，再思考如何将溢出的填充到低位上。可以将x右移$32-n$位，特别注意如果x为负数，应该将高位全部设置为0

## 4.greatestBitPos

```c
int greatestBitPos(int x) {
   int m=!x+(~0);
   int sign=x>>31;
   x |= x>>1;
   x |= x>>2;
   x |= x>>4;
   x |= x>>8;
   x |= x>>16;
   x=(x>>1)+1;
   return (x&m)|((1<<31)&sign);
}
```

当x为0时,$m=1-1=0,sign=0$ 返回值为0
当$x>0$时，$m=0-1=-1,sign=0$ ,接着将x右移1、2、4、8、16位，将x最高位后的位全部设置为1，最后将x>>1+1取出x的最高位，返回x&-1
当$x<0$时，$m=0-1=-1,sign=-1$，接着将x右移1、2、4、8、16位，将x最高位后的位全部设置为1，最后将x>>1+1取出x的最高位，返回x&1并加上负号

## 5.leastBitPos

```c
int leastBitPos(int x) {
    return x & (~x+1);
}
```

根据lowerbit的结论,**lowerbit=n&(-n)**

## 6.subOk

```c
int subOK(int x, int y) {
   int sum = x + (~y + 1);
   int sign = (x ^ y) & (x ^ sum);
   return !(sign >> 31);
}
```

需要检验x-y是否溢出！
溢出只有两种情况,一是x为正，y为负，sum为负，另一种是x为负，y为正，sum为正，可以观察到：x与y异号并且x与sum异号，可以使用异或检查符号位是否满足溢出条件

## 7.satMul3

```c
int satMul3(int x) {
   int two = x + x;
   int three = two + x;
   int mask = ((x^two) | (x^three))>>31;
   return (mask | three) ^ (mask & ((x>>31) ^ (1<<31)));
}
```

首先我们考虑求出$3x$，思路易得，先求出$2x$，再加上$x$得到$3x$。
接着我们需要思考是否溢出，可以将3x变为x+2x = 3x，即可化成x+y=sum是否溢出的情形。

## 8.divpwr2

```c
int divpwr2(int x, int n) {
   int sign = (x>>31);
   int mask = ((1<<n)+(~1+1));
   int res = ( x + (mask&sign) )>> n;
    return res;
}
```

除以2的n次方，可以等效为二进制右移n位。特别注意x为负数时，应该向上舍入。当x<0时，加上$2^n-1$即可实现向上舍入

## 9.float_abs

```c
unsigned float_abs(unsigned uf) {
   unsigned abs = uf & 0x7FFFFFFF;
   return abs > 0x7F800000 ? uf : abs;
}
```

这是要求一个浮点数的绝对值。符号位在最高位，0为正数，1为负数。当uf不为NAN时，直接返回abs即可。
当uf为NaN时，我们详细讨论一下：float有1位符号位，8位指数位，以及23位小数位。当指数位全为1且小数不为0时，uf为NaN。abs为uf除最高符号位的值，如果abs>0x7F800000（即uf的指数位全为1且小数位不为0）返回uf。

## 10.float_i2f

```c
unsigned float_i2f(int x) {
   unsigned uf, sign = 0, i, t;
   if (!x) return 0;
   if (x == -x) return 0xcf000000;
   sign = x < 0 ? 0x80000000 : 0;
   uf = x < 0 ? -x : x;

   for (i = 30; !(uf & (1 << i)); i--); 
   uf -= 1 << i;

   if (i < 24) uf <<= 23 - i;
   else {
       t = i - 23;
       uf += 1 << (t - 1); 
       uf -= (uf & ((1 << (t + 1)) - 1)) != 0;
       uf >>= t;
   }
   return uf + ((i + 127) << 23) + sign;
}
```

本题模拟int转到float的过程。关键在于确定小数位、指数位和符号位。

- 如果x为0或者x为$T_{min}$，特殊情况特殊处理
- 符号位：变量sign存储符号位
- uf变为x的绝对值（去除符号位的干扰）
- 从高位扫描到低位，找到最高位的1的位置，并将最高位的1去除（减去1<<i），原因在于规格化值的小数部分已经隐含了1
- 如果最高位的1在第23位或更低位，表明23位的小数部分可完全存下，无需舍入，只需要将uf的最高位1与最高位对齐即可。（如.01010->.10100)
- 如果最高位的1在24位及更高位，需要进行舍入处理（偶舍入）。$t=i-23$是需要舍入的低位的位数。先加上1<<(t-1)即要被丢弃的数的一半先进行舍入操作。再由uf的低(t+1)位是否为0，如果不为0，表明1后面跟着0，不应该进位
