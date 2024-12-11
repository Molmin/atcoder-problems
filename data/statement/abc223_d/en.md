Score : $400$ points

## Problem Statement

Among the sequences $P$ that are permutations of $(1, 2, \dots, N)$ and satisfy the condition below, find the lexicographically smallest sequence.

- For each $i = 1, \dots, M$, $A_i$ appears earlier than $B_i$ in $P$.

If there is no such $P$, print `-1`.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq 2 \times 10^5$
- $1 \leq A_i, B_i \leq N$
- $A_i \neq B_i$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## Output

Print the answer.

```input1
4 3
2 1
3 4
2 4
```

```output1
2 1 3 4
```

The following five permutations $P$ satisfy the condition: $(2, 1, 3, 4), (2, 3, 1, 4), (2, 3, 4, 1), (3, 2, 1, 4), (3, 2, 4, 1)$. The lexicographically smallest among them is $(2, 1, 3, 4)$.

```input2
2 3
1 2
1 2
2 1
```

```output2
-1
```

No permutations $P$ satisfy the condition.