Score : $300$ points

## Problem Statement

There are $N$ cells numbered from $1$ to $N$ in a row. Initially, $M$ cells contain stones, and cell $X_i$ contains $A_i$ stones $(1 \leq i \leq M)$.

You can perform the following operation any number of times (possibly zero):

- If cell $i$ ($1 \leq i \leq N-1$) contains a stone, move one stone from cell $i$ to cell $i+1$.

Find the minimum number of operations required to reach a state where each of the $N$ cells contains exactly one stone. If it is impossible, print $-1$.

## Constraints

- $2 \leq N \leq 2 \times 10^{9}$
- $1 \leq M \leq 2 \times 10^{5}$
- $M \leq N$
- $1 \leq X_i \leq N$ $(1 \leq i \leq M)$
- $X_i \neq X_j$ $(1 \leq i &lt; j \leq M)$
- $1 \leq A_i \leq 2 \times 10^{9}$ $(1 \leq i \leq M)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $X_1$ $X_2$ $\ldots$ $X_M$
> 
> $A_1$ $A_2$ $\ldots$ $A_M$

## Output

Print the answer.

```input1
5 2
1 4
3 2
```

```output1
4
```

You can reach a state where each of the five cells contains exactly one stone with four operations as follows:

- Move one stone from cell $1$ to cell $2$.
- Move one stone from cell $2$ to cell $3$.
- Move one stone from cell $4$ to cell $5$.
- Move one stone from cell $1$ to cell $2$.

It is impossible to achieve the goal in three or fewer operations. Therefore, print $4$.

```input2
10 3
1 4 8
4 2 4
```

```output2
-1
```

No matter how you perform the operations, you cannot reach a state where all ten cells contain exactly one stone. Therefore, print $-1$.