Score : $600$ points

## Problem Statement

Given is a sequence of $N$ positive integers: $A = (A_1, A_2, \ldots, A_N)$. You can do the following operation on this sequence at least zero and at most $K$ times:

- choose $i\in \{1,2,\ldots,N\}$ and add $1$ to $A_i$.

Find the maximum possible value of $\gcd(A_1, A_2, \ldots, A_N)$ after your operations.

## Constraints

- $2\leq N\leq 3\times 10^5$
- $1\leq K\leq 10^{18}$
- $1 \leq A_i\leq 3\times 10^5$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the maximum possible value of $\gcd(A_1, A_2, \ldots, A_N)$ after your operations.

```input1
3 6
3 4 9
```

```output1
5
```

One way to achieve $\gcd(A_1, A_2, A_3) = 5$ is as follows.

- Do the operation with $i = 1$ twice, with $i = 2$ once, and with $i = 3$ once, for a total of four times, which is not more than $K=6$.
- Now we have $A_1 = 5$, $A_2 = 5$, $A_3 = 10$, for which $\gcd(A_1, A_2, A_3) = 5$.

```input2
3 4
30 10 20
```

```output2
10
```

Doing no operation achieves $\gcd(A_1, A_2, A_3) = 10$.

```input3
5 12345
1 2 3 4 5
```

```output3
2472
```