Score : $300$ points

## Problem Statement

You are given six integers: $h_1, h_2, h_3, w_1, w_2$, and $w_3$.<br>
Consider writing a **positive** integer on each square of a $3 \times 3$ grid so that all of the following conditions are satisfied:

- For $i=1,2,3$, the sum of numbers written in the $i$-th row from the top is $h_i$.
- For $j=1,2,3$, the sum of numbers written in the $j$-th column from the left is $w_i$.

For example, if $(h_1, h_2, h_3) = (5, 13, 10)$ and $(w_1, w_2, w_3) = (6, 13, 9)$, then all of the following three ways satisfy the conditions.  (There are other ways to satisfy the conditions.)

![image](https://img.atcoder.jp/ghi/42e99457e52ca5e6d335b2dbda72d9ab.png)

How many ways are there to write numbers to satisfy the conditions?

## Constraints

- $3 \leq h_1, h_2, h_3, w_1, w_2, w_3 \leq 30$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $h_1$ $h_2$ $h_3$ $w_1$ $w_2$ $w_3$

## Output

Print the number of ways to write numbers to satisfy the conditions.

```input1
3 4 6 3 3 7
```

```output1
1
```

The following is the only way to satisfy the conditions.  Thus, $1$ should be printed.

![image2](https://img.atcoder.jp/ghi/d53ea47321716fe799854c72b7beff3c.jpg)

```input2
3 4 5 6 7 8
```

```output2
0
```

There may not be a way to satisfy the conditions.

```input3
5 13 10 6 13 9
```

```output3
120
```

```input4
20 25 30 22 29 24
```

```output4
30613
```