Score: $525$ points

## Problem Statement

There are $N$ people, numbered $1$ to $N$.

A competition was held among these $N$ people, and they were ranked accordingly. The following information is given about their ranks:

- Each person has a unique rank.
- For each $1 \leq i \leq M$, if person $A_i$ is ranked $x$-th and person $B_i$ is ranked $y$-th, then $x - y = C_i$.

The given input guarantees that there is at least one possible ranking that does not contradict the given information.

Answer $N$ queries. The answer to the $i$-th query is an integer determined as follows:

- If the rank of person $i$ can be uniquely determined, return that rank. Otherwise, return $-1$.

## Constraints

- $2 \leq N \leq 16$
- $0 \leq M \leq \frac{N(N - 1)}{2}$
- $1 \leq A_i, B_i \leq N$
- $1 \leq C_i \leq N - 1$
- $(A_i, B_i) \neq (A_j, B_j) (i \neq j)$
- There is at least one possible ranking that does not contradict the given information.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$ $C_1$
> 
> $A_2$ $B_2$ $C_2$
> 
> $\vdots$
> 
> $A_M$ $B_M$ $C_M$

## Output

Print the answers to the $1$-st, $2$-nd, $\ldots$, $N$-th queries in this order, separated by spaces.

```input1
5 2
2 3 3
5 4 3
```

```output1
3 -1 -1 -1 -1
```

Let $X_i$ be the rank of person $i$. Then, $(X_1, X_2, X_3, X_4, X_5)$ could be $(3, 4, 1, 2, 5)$ or $(3, 5, 2, 1, 4)$.

Therefore, the answer to the $1$-st query is $3$, and the answers to the $2$-nd, $3$-rd, $4$-th, and $5$-th queries are $-1$.

```input2
3 0
```

```output2
-1 -1 -1
```

```input3
8 5
6 7 3
8 1 7
4 5 1
7 2 1
6 2 4
```

```output3
1 -1 -1 -1 -1 -1 -1 8
```