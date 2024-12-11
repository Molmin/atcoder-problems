Score : $100$ points

## Problem Statement

There is a grid with $H$ horizontal rows and $W$ vertical columns. Let $(i,j)$ denote the square at the $i$-th row from the top and the $j$-th column from the left.<br>
Find the number of squares that share a side with Square $(R, C)$.

Here, two squares $(a,b)$ and $(c,d)$ are said to share a side if and only if $|a-c|+|b-d|=1$ (where $|x|$ denotes the absolute value of $x$).

## Constraints

- All values in input are integers.
- $1 \le R \le H \le 10$
- $1 \le C \le W \le 10$

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $R$ $C$

## Output

Print the answer as an integer.

```input1
3 4
2 2
```

```output1
4
```

We will describe Sample Inputs/Outputs $1,2$, and $3$ at once below Sample Output $3$.

```input2
3 4
1 3
```

```output2
3
```

```input3
3 4
3 4
```

```output3
2
```

When $H=3$ and $W=4$, the grid looks as follows.

- For Sample Input $1$, there are $4$ squares adjacent to Square $(2,2)$.
- For Sample Input $2$, there are $3$ squares adjacent to Square $(1,3)$.
- For Sample Input $3$, there are $2$ squares adjacent to Square $(3,4)$.

![](https://img.atcoder.jp/abc250/abc250a-fig1.png)

```input4
1 10
1 5
```

```output4
2
```

```input5
8 1
8 1
```

```output5
1
```

```input6
1 1
1 1
```

```output6
0
```