Score : $800$ points

## Problem Statement

There are $N$ customers named $1,\ldots,N$ visiting a shop. Customer $i$ arrives at time $A_i$ and leaves at time $B_i$. The queue order is *first in-first out*, so $A_i$ are increasing, and $B_i$ are increasing. Additionally, all $A_i$ and $B_i$ are pairwise distinct.

At the entrance there's a list of visitors to put their names in. Each customer will write down their name next in the list exactly once, either when they arrive or when they leave. How many different orders of names can there be in the end?
Find the count modulo $998\,244\,353$.

## Constraints

- $1 \leq N \leq 5 \cdot 10^5$
- $1 \leq A_i &lt; B_i \leq 2N$
- $A_i &lt; A_{i + 1}$ ($1 \leq i \leq N - 1$)
- $B_i &lt; B_{i + 1}$ ($1 \leq i \leq N - 1$)
- $A_i \neq B_j$ ($i \neq j$)
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

Print the answer.

```input1
3
1 3
2 5
4 6
```

```output1
3
```

The possible orders are $(1, 2, 3)$, $(2, 1, 3)$, $(1, 3, 2)$.

```input2
4
1 2
3 4
5 6
7 8
```

```output2
1
```

The only possible order is $(1, 2, 3, 4)$.