Score : $500$ points

## Problem Statement

You are given a sequence $A$ of non-negative integers of length $N$, and an integer $K$. It is guaranteed that the binomial coefficient $\dbinom{N}{K}$ is at most $10^6$.

When choosing $K$ distinct elements from $A$, find the maximum possible value of the XOR of the $K$ chosen elements.

That is, find $\underset{1\leq i_1\lt i_2\lt \ldots\lt i_K\leq N}{\max} A_{i_1}\oplus A_{i_2}\oplus \ldots \oplus A_{i_K}$.

About XOR

For non-negative integers $A,B$, the XOR $A \oplus B$ is defined as follows:

- In the binary representation of $A \oplus B$, the bit corresponding to $2^k (k \ge 0)$ is $1$ if and only if exactly one of the bits corresponding to $2^k$ in $A$ and $B$ is $1$, and is $0$ otherwise.

For example, $3 \oplus 5 = 6$ (in binary notation: $011 \oplus 101 = 110$).
In general, the XOR of $K$ integers $p_1, \dots, p_k$ is defined as $(\cdots((p_1 \oplus p_2) \oplus p_3) \oplus \cdots \oplus p_k)$. It can be proved that it does not depend on the order of $p_1, \dots, p_k$.

## Constraints

- $1\leq K\leq N\leq 2\times 10^5$
- $0\leq A_i&lt;2^{60}$
- $\dbinom{N}{K}\leq 10^6$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
4 2
3 2 6 4
```

```output1
7
```

Here are six ways to choose two distinct elements from $(3,2,6,4)$.

- $(3,2)$: The XOR is $3\oplus 2 = 1$.
- $(3,6)$: The XOR is $3\oplus 6 = 5$.
- $(3,4)$: The XOR is $3\oplus 4 = 7$.
- $(2,6)$: The XOR is $2\oplus 6 = 4$.
- $(2,4)$: The XOR is $2\oplus 4 = 6$.
- $(6,4)$: The XOR is $6\oplus 4 = 2$.

Hence, the maximum possible value is $7$.

```input2
10 4
1516 1184 1361 2014 1013 1361 1624 1127 1117 1759
```

```output2
2024
```