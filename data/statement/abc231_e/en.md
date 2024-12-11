Score : $500$ points

## Problem Statement

There are $N$ kinds of coins used in the Kingdom of Atcoder: $A_1$-yen, $A_2$-yen, $\ldots$, $A_N$-yen coins.<br>
Here, $1=A_1 &lt; \ldots &lt; A_N$ holds, and $A_{i+1}$ is a multiple of $A_i$ for every $1\leq i \leq N-1$.

When paying for a product worth $X$ yen using just these coins, what is the minimum total number of coins used in payment and returned as change?

Accurately, when $Y$ is an integer at least $X$, find the minimum sum of the number of coins needed to represent exactly $Y$ yen and the number of coins needed to represent exactly $Y-X$ yen.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 60$
- $1=A_1 &lt; \ldots &lt;A_N \leq 10^{18}$
- $A_{i+1}$ is a multiple of $A_i$ for every $1\leq i \leq N-1$.
- $1\leq X \leq 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
3 87
1 10 100
```

```output1
5
```

If we pay with one $100$-yen coin and receive one $10$-yen coin and three $1$-yen coins as the change, the total number of coins will be $5$.

```input2
2 49
1 7
```

```output2
7
```

It is optimal to pay with seven $7$-yen coins.

```input3
10 123456789012345678
1 100 10000 1000000 100000000 10000000000 1000000000000 100000000000000 10000000000000000 1000000000000000000
```

```output3
233
```