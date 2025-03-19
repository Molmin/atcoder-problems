Score : $500$ points

## Problem Statement

You are given integers $N, M$ and a length-$N$ sequence of non-negative integers $A = (A_1, A_2, \ldots, A_N)$.

For $k = 0, 1, \ldots, M-1$, solve the following problem:

Define an integer sequence $B = (B_1, B_2, \ldots, B_N)$ so that $B_i$ is the remainder of $A_i + k$ when divided by $M$. Find the inversion number in $B$.

What is the inversion number?
The inversion number of a sequence $(A_1, A_2, \dots, A_N)$ is the number of integer pairs $(i, j)$ satisfying $1 \le i < j \le N$ and $A_i > A_j$.

## Constraints

- $1 \le N,M \le 2\times 10^5$
- $0 \le A_i &lt; M$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print $M$ lines.

The $i$-th line $(1 \le i \le M)$ should contain the answer for the case $k = i-1$.

```input1
3 3
2 1 0
```

```output1
3
1
1
```

- For $k=0$: $B=(2, 1, 0)$. The inversion number is $3$.
- For $k=1$: $B=(0, 2, 1)$. The inversion number is $1$.
- For $k=2$: $B=(1, 0, 2)$. The inversion number is $1$.

```input2
5 6
5 3 5 0 1
```

```output2
7
3
3
1
1
5
```

```input3
7 7
0 1 2 3 4 5 6
```

```output3
0
6
10
12
12
10
6
```