Score : $800$ points

## Problem Statement

Given are $N$ pairwise distinct non-negative integers $A_1,A_2,\ldots,A_N$.
Find the number of ways to choose a set of between $1$ and $K$ numbers (inclusive) from the given numbers so that the following two conditions are satisfied:

- The bitwise AND of the chosen numbers is $S$.
- The bitwise OR of the chosen numbers is $T$.

## Constraints

- $1 \leq N \leq 50$
- $1 \leq K \leq N$
- $0 \leq A_i &lt; 2^{18}$
- $0 \leq S &lt; 2^{18}$
- $0 \leq T &lt; 2^{18}$
- $A_i \neq A_j$ ($1 \leq i &lt; j \leq N$)

## Input

Input is given from Standard Input in the following format:

> $N$ $K$ $S$ $T$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the answer.

```input1
3 3 0 3
1 2 3
```

```output1
2
```

The conditions are satisfied when we choose $\{1,2\}$ or $\{1,2,3\}$.

```input2
5 3 1 7
3 4 9 1 5
```

```output2
2
```

```input3
5 4 0 15
3 4 9 1 5
```

```output3
3
```