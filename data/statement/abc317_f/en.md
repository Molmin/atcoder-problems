Score : $500$ points

## Problem Statement

You are given integers $N,A_1,A_2,A_3$. Find the number, modulo $998244353$, of triples of positive integers $(X_1,X_2,X_3)$ that satisfy all of the following three conditions.

- $1\leq X_i \leq N$ for every $i$.
- $X_i$ is a multiple of $A_i$ for every $i$.
- $(X_1 \oplus X_2) \oplus X_3 = 0$, where $\oplus$ denotes bitwise xor.

What is bitwise xor?
The bitwise xor of non-negative integers $A$ and $B$, $A \oplus B$, is defined as follows.

- When $A \oplus B$ is written in binary, the $2^k$s place ($k \geq 0$) is $1$ if exactly one of the $2^k$s places of $A$ and $B$ is $1$, and $0$ otherwise.

For instance, $3 \oplus 5 = 6$ (in binary: $011 \oplus 101 = 110$).

## Constraints

- $1 \leq N \leq 10^{18}$
- $1 \leq A_i \leq 10$
- All input values are integers.

## Input

The Input is given from Standard Input in the following format:

> $N$ $A_1$ $A_2$ $A_3$

## Output

Print the answer.  

```input1
13 2 3 5
```

```output1
4
```

Four triples $(X_1,X_2,X_3)$ satisfy the conditions: $(6,3,5),(6,12,10),(12,6,10),(12,9,5)$.

```input2
1000000000000000000 1 1 1
```

```output2
426724011
```

```input3
31415926535897932 3 8 4
```

```output3
759934997
```