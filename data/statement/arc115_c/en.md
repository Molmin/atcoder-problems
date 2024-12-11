Score : $500$ points

## Problem Statement

Given is an integer $N$. Among the sequences of $N$ positive integers $A_1, A_2, \ldots, A_N$ satisfying the following condition, print one that minimizes the maximum value in the sequence.

- If $i$ divides $j$, $A_i \neq A_j$ $(1 \leq i &lt; j \leq N)$.

## Constraints

- $1 \leq N \leq 10^5$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print a line containing the elements of your sequence, with spaces in between.

If there are multiple valid solutions, any of them will be accepted.

> $A_1$ $A_2$ $\ldots$ $A_N$

```input1
4
```

```output1
1 2 2 3
```

This solution satisfies all of the following conditions:

- $A_1 \neq A_2$
- $A_1 \neq A_3$
- $A_1 \neq A_4$
- $A_2 \neq A_4$

Additionally, there is no sequence satisfying these conditions where the maximum value in the sequence is $2$ or less, so this is a valid solution.