Score: $700$ points

## Problem Statement

You are given a permutation $P=(P_1,P_2,\dots,P_N)$ of $(1,2,\dots,N)$. You will perform the following operation $M$ times:

- Choose a pair of integers $(i, j)$ such that $1 \le i &lt; j \le N$, and swap $P_i$ and $P_j$.

There are $\left(\frac{N(N-1)}{2}\right)^M$ possible sequences of operations. For each of them, consider the value $\sum_{i=1}^{N-1} |P_i - P_{i+1}|$ after all the operations. Find the sum, modulo $998244353$, of all those values.

## Constraints

- $2 \le N \le 2 \times 10^5$
- $1 \le M \le 2 \times 10^5$
- $(P_1,P_2,\dots,P_N)$ is a permutation of $(1,2,\dots,N)$.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $P_1$ $P_2$ $\dots$ $P_N$

## Output

Print the answer.

```input1
3 1
1 3 2
```

```output1
8
```

There are three possible sequences of operations:

- Choose $(i,j) = (1,2)$, making $P=(3,1,2)$.
- Choose $(i,j) = (1,3)$, making $P=(2,3,1)$.
- Choose $(i,j) = (2,3)$, making $P=(1,2,3)$.

The values of $\sum_{i=1}^{N-1} |P_i - P_{i+1}|$ for these cases are $3$, $3$, $2$, respectively. Thus, the answer is $3 + 3 + 2 = 8$.

```input2
2 5
2 1
```

```output2
1
```

```input3
5 2
3 5 1 4 2
```

```output3
833
```

```input4
20 24
14 1 20 6 11 3 19 2 7 10 9 18 13 12 17 8 15 5 4 16
```

```output4
203984325
```