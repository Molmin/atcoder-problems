Score: $500$ points

## Problem Statement

Ms. AtCoder has decided to distribute chocolates to $N$ friends on Valentine's Day. For the $i$-th friend $(1 \leq i \leq N)$, she wants to give a square chocolate bar of size $2^{A_i} \times 2^{A_i}$.

She has procured a rectangular chocolate bar of size $H \times W$. It is partitioned by lines into a grid of $H$ rows and $W$ columns, each cell being a $1 \times 1$ square.

Determine whether it is possible to divide the chocolate bar along the lines into several pieces to obtain all the chocolate bars for her friends. It is fine to have leftover pieces.

## Constraints

- $1 \leq H \leq 10^9$
- $1 \leq W \leq 10^9$
- $1 \leq N \leq 1000$
- $0 \leq A_i \leq 25 \ (1 \leq i \leq N)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$ $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

If the objective is achievable, print `Yes`; otherwise, print `No`.

```input1
4 4 4
1 0 0 1
```

```output1
Yes
```

By dividing a $4 \times 4$ chocolate bar as shown in the figure below, you can obtain pieces of size $2 \times 2, 1 \times 1, 1 \times 1, 2 \times 2$.

![](https://img.atcoder.jp/arc172/46f487245ec72edd225e4e6b36cb7600.png)

```input2
5 7 6
0 1 0 2 0 1
```

```output2
Yes
```

By dividing a $5 \times 7$ chocolate bar as shown in the figure below, you can obtain pieces of size $1 \times 1, 2 \times 2, 1 \times 1, 4 \times 4, 1 \times 1, 2 \times 2$.

![](https://img.atcoder.jp/arc172/4c2ab4192df6687b23e2d68d318868bb.png)

```input3
3 2 7
0 0 0 0 0 0 0
```

```output3
No
```

It is impossible to obtain seven pieces of size $1 \times 1$ from a $3 \times 2$ chocolate bar.

```input4
11 11 2
2 3
```

```output4
No
```

It is impossible to obtain both a $4 \times 4$ and an $8 \times 8$ piece from an $11 \times 11$ chocolate bar.

```input5
777 777 6
8 6 9 1 2 0
```

```output5
Yes
```