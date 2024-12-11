Score : $100$ points

## Problem Statement

Print all non-negative integers less than or equal to $N$ in descending order.

## Constraints

- $1 \leq N \leq 100$
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print $X$ lines, where $X$ is the number of non-negative integers less than or equal to $N$.<br>
For each $i=1, 2, \ldots, X$, the $i$-th line should contain the $i$-th greatest non-negative integer less than or equal to $N$.

```input1
3
```

```output1
3
2
1
0
```

We have four non-negative integers less than or equal to $3$, which are $0$, $1$, $2$, and $3$.<br>
To print them in descending order, print $3$ in the first line, $2$ in the second, $1$ in the third, and $0$ in the fourth.

```input2
22
```

```output2
22
21
20
19
18
17
16
15
14
13
12
11
10
9
8
7
6
5
4
3
2
1
0
```