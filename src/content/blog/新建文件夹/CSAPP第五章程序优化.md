---
title: 'CSAPP 第五章程序优化总结'
publishDate: '2025-05-19'
updatedDate: '2025-05-19'
description: '基于Whu计院的CSAPP第五章程序优化总结'
tags:
  - CSAPP
  - WhuCS
language: '中文'
---

## 常用优化方法

### 消除编译时常量

如果表达式中的全部或部分成分是编译时常量，则可以在编译时完成一部分计算，从而减少运行时的计算开销。

```c++
a = 10;
b = 20;
c = a;
d = c+b;

if (d > 20)
f();
else
g();
return;

//可以化为：
f();
return;
```

### 减少重复计算

