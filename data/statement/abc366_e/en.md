Score : $475$ points

## Problem Statement

You are given $N$ points $(x_1, y_1), (x_2, y_2), \dots, (x_N, y_N)$ on a two-dimensional plane, and a non-negative integer $D$.

Find the number of integer pairs $(x, y)$ such that $\displaystyle \sum_{i=1}^N (|x-x_i|+|y-y_i|) \leq D$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq D \leq 10^6$
- $-10^6 \leq x_i, y_i \leq 10^6$
- $(x_i, y_i) \neq (x_j, y_j)$ for $i \neq j$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $D$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $\vdots$
> 
> $x_N$ $y_N$

## Output

Print the answer.

```input1
2 3
0 0
1 0
```

```output1
8
```

The following figure visualizes the input and the answer for Sample $1$. The blue points represent the input. The blue and red points, eight in total, satisfy the condition in the statement.

![](https://img.atcoder.jp/abc366/2b6d85ce3511e14c65dc80e052d62bca.png)

```input2
2 0
0 0
2 0
```

```output2
0
```

```input3
6 100
9 -6
10 -1
2 10
-1 7
-7 5
-1 -4
```

```output3
419
```