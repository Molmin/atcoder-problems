Score : $600$ points

## Problem Statement

Given are integers $L$ and $R$. Find the number, modulo $10^9 + 7$, of pairs of integers $(x, y)$ $(L \leq x \leq y \leq R)$ such that the remainder when $y$ is divided by $x$ is equal to $y \text{ XOR } x$.

What is $\text{ XOR }$?

The XOR of integers $A$ and $B$, $A \text{ XOR } B$, is defined as follows:

- When $A \text{ XOR } B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if either $A$ or $B$, but not both, has $1$ in the $2^k$'s place, and $0$ otherwise.

For example, $3 \text{ XOR } 5 = 6$. (In base two: $011 \text{ XOR } 101 = 110$.)

## Constraints

- $1 \leq L \leq R \leq 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $L$ $R$

## Output

Print the number of pairs of integers $(x, y)$ $(L \leq x \leq y \leq R)$ satisfying the condition, modulo $10^9 + 7$.

```input1
2 3
```

```output1
3
```

Three pairs satisfy the condition: $(2, 2)$, $(2, 3)$, and $(3, 3)$.

```input2
10 100
```

```output2
604
```

```input3
1 1000000000000000000
```

```output3
68038601
```

Be sure to compute the number modulo $10^9 + 7$.