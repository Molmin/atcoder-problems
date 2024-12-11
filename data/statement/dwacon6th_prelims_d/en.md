Score : $800$ points

## Problem Statement

Niwango has $N$ cards, numbered $1,2,\ldots,N$.
He will now arrange these cards in a row.

Niwango wants to know if there is a way to arrange the cards while satisfying all the $N$ conditions below.
To help him, determine whether such a way exists. If the answer is yes, also find the lexicographically smallest such arrangement.

- To the immediate right of Card $1$ (if any) is NOT Card $a_1$.
- To the immediate right of Card $2$ (if any) is NOT Card $a_2$.
- $\vdots$
- To the immediate right of Card $N$ (if any) is NOT Card $a_N$.

## Constraints

- $2 \leq N \leq 10^{5}$
- $1 \leq a_i \leq N$
- $a_i \neq i$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $\ldots$ $a_N$

## Output

If no arrangements satisfy the conditions, print `-1`. If such arrangements exist, print the lexicographically smallest such arrangement, in the following format:

> $b_1$ $b_2$ $\ldots$ $b_N$

Here, $b_i$ represents the $i$-th card from the left.

```input1
4
2 3 4 1
```

```output1
1 3 2 4
```

- The arrangement $(1,2,3,4)$ is lexicographically smaller than $(1,3,2,4)$, but is invalid, since it violates the condition "to the immediate right of Card $1$ is not Card $2$."

```input2
2
2 1
```

```output2
-1
```

- If no arrangements satisfy the conditions, print `-1`.

```input3
13
2 3 4 5 6 7 8 9 10 11 12 13 12
```

```output3
1 3 2 4 6 5 7 9 8 10 12 11 13
```