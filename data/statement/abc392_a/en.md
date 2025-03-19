Score : $100$ points

## Problem Statement

You are given a sequence of integers $A = (A_1, A_2, A_3)$.<br>
Let $B = (B_1, B_2, B_3)$ be any permutation of $A$.<br>
Determine whether it is possible that $B_1 \times B_2 = B_3$.

## Constraints

- All input values are integers.
- $1 \le A_1, A_2, A_3 \le 100$

## Input

The input is given from Standard Input in the following format:

> $A_1$ $A_2$ $A_3$

## Output

If it is possible that $B_1 \times B_2 = B_3$, print `Yes`; otherwise, print `No`.

```input1
3 15 5
```

```output1
Yes
```

Here, $A=(3,15,5)$.
By rearranging it as $B=(3,5,15)$, we can satisfy $B_1 \times B_2 = B_3$.

```input2
5 3 2
```

```output2
No
```

No permutation of $B$ satisfies $B_1 \times B_2 = B_3$.