Score : $500$ points

## Problem Statement

You are given a positive integer $L$ in base two.
How many pairs of non-negative integers $(a, b)$ satisfy the following conditions?

- $a + b \leq L$
- $a + b = a \text{ XOR } b$

Since there can be extremely many such pairs, print the count modulo $10^9 + 7$.

 What is XOR?

The XOR of integers $A$ and $B$, $A \text{ XOR } B$, is defined as follows:

- When $A \text{ XOR } B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if either $A$ or $B$, but not both, has $1$ in the $2^k$'s place, and $0$ otherwise.

For example, $3 \text{ XOR } 5 = 6$. (In base two: $011 \text{ XOR } 101 = 110$.)

## Constraints

- $L$ is given in base two, without leading zeros.
- $1 \leq L &lt; 2^{100\ 001}$

## Input

Input is given from Standard Input in the following format:

> $L$

## Output

Print the number of pairs $(a, b)$ that satisfy the conditions, modulo $10^9 + 7$.

```input1
10
```

```output1
5
```

Five pairs $(a, b)$ satisfy the conditions: $(0, 0), (0, 1), (1, 0), (0, 2)$ and $(2, 0)$.

```input2
1111111111111111111
```

```output2
162261460
```