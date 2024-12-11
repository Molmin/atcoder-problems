Score : $1200$ points

## Problem Statement

Snuke loves flags.

Snuke is placing $N$ flags on a line.

The $i$-th flag can be placed at either coordinate $x_i$ or coordinate $y_i$.

Snuke thinks that the flags look nicer when the smallest distance between two of them, $d$, is larger. Find the maximum possible value of $d$.

## Constraints

- $2 \leq N \leq 10^{4}$
- $1 \leq x_i, y_i \leq 10^{9}$
- $x_i$ and $y_i$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$
> 
> $:$
> 
> $x_N$ $y_N$

## Output

Print the answer.

```input1
3
1 3
2 5
1 9
```

```output1
4
```

The optimal solution is to place the first flag at coordinate $1$, the second flag at coordinate $5$ and the third flag at coordinate $9$. The smallest distance between two of the flags is $4$ in this case.

```input2
5
2 2
2 2
2 2
2 2
2 2
```

```output2
0
```

There can be more than one flag at the same position.

```input3
22
93 6440
78 6647
862 11
8306 9689
798 99
801 521
188 206
6079 971
4559 209
50 94
92 6270
5403 560
803 83
1855 99
42 504
75 484
629 11
92 122
3359 37
28 16
648 14
11 269
```

```output3
17
```