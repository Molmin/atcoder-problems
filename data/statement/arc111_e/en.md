Score : $800$ points

## Problem Statement

In this problem, you will be given $T$ test cases for each input.

Given integers $A$, $B$, $C$, and $D$, find the number of positive integers $i$ satisfying the following condition:

- None of the integers between $A + B \times i$ and $A + C \times i$ (inclusive) is a multiple of $D$.

We can prove from the constraints that the count is finite.

## Constraints

- $1 \leq T \leq 10{,}000$
- $1 \leq A &lt; D$
- $0 \leq B &lt; C &lt; D$
- $2 \leq D \leq 10^8$

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $A_1$ $B_1$ $C_1$ $D_1$
> 
> $:$
> 
> $A_T$ $B_T$ $C_T$ $D_T$

## Output

Print $T$ lines.

The $i$-th line should contain the answer for the $i$-th case ($A_i$, $B_i$, $C_i$, $D_i$).

```input1
2
3 1 2 5
99 101 103 105
```

```output1
1
25
```

The pairs $(A + B \times i, A + C \times i)$ for the first case are listed below. We can see that only $i = 3$ satisfies the condition.

- $i = 1: (4, 5)$
- $i = 2: (5, 7)$
- $i = 3: (6, 9)$
- $i = 4: (7, 11)$
- $i = 5: (8, 13)$
- $:$