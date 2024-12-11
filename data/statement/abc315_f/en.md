Score : $500$ points

## Problem Statement

There is a race through checkpoints $1,2,\dots,N$ in this order on a coordinate plane.<br>
The coordinates of checkpoint $i$ are $(X_i,Y_i)$, and all checkpoints have different coordinates.

Checkpoints other than checkpoints $1$ and $N$ can be skipped.<br>
However, let $C$ be the number of checkpoints skipped, and the following penalty will be imposed:

- $\displaystyle 2^{C - 1}$ if $C &gt; 0$, and
- $0$ if $C=0$.

Let $s$ be the total distance traveled (Euclidean distance) from checkpoint $1$ to checkpoint $N$ plus the penalty.<br>
Find the minimum achievable value as $s$.

## Constraints

- All input values are integers.
- $2 \le N \le 10^4$
- $0 \le X_i,Y_i \le 10^4$
- $(X_i,Y_i) \neq (X_j,Y_j)$ if $i \neq j$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_N$ $Y_N$

## Output

Print the answer. Your output is considered correct if the absolute or relative error from the true value is at most $10^{-5}$.

```input1
6
0 0
1 1
2 0
0 1
1 0
2 1
```

```output1
5.82842712474619009753
```

Consider passing through checkpoints $1,2,5,6$ and skip checkpoints $3,4$.

- Move from checkpoint $1$ to $2$. The distance between them is $\sqrt{2}$.
- Move from checkpoint $2$ to $5$. The distance between them is $1$.
- Move from checkpoint $5$ to $6$. The distance between them is $\sqrt{2}$.
- Two checkpoints are skipped, so the penalty of $2$ is imposed.

In this way, you can achieve $s = 3 + 2\sqrt{2} \approx 5.828427$.<br>
You cannot make $s$ smaller than this value.

```input2
10
1 8
3 7
9 4
4 9
6 1
7 5
0 0
1 3
6 8
6 4
```

```output2
24.63441361516795872523
```

```input3
10
34 24
47 60
30 31
12 97
87 93
64 46
82 50
14 7
17 24
3 78
```

```output3
110.61238353245736230207
```