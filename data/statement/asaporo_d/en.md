Score : $700$ points

## Problem Statement

There are $N$ panels arranged in a row in Takahashi's house, numbered $1$ through $N$. The $i$-th panel has a number $A_i$ written on it. Takahashi is playing by throwing balls at these panels.

Takahashi threw a ball $K$ times. Let the panel hit by a boll in the $i$-th throw be panel $p_i$. He set the score for the $i$-th throw as $i \times A_{p_i}$.

He was about to calculate the total score for his throws, when he realized that he forgot the panels hit by balls, $p_1,p_2,...,p_K$. The only fact he remembers is that for every $i$ $(1 \leq i \leq K-1)$, $1 \leq p_{i+1}-p_i \leq M$ holds. Based on this fact, find the maximum possible total score for his throws.

## Constraints

- $1 \leq M \leq N \leq 100,000$
- $1 \leq K \leq min(300,N)$
- $1 \leq A_i \leq 10^{9}$

## Partial Scores

- In the test set worth $100$ points, $M = N$.
- In the test set worth another $200$ points, $N \leq 300$ and $K \leq 30$.
- In the test set worth another $300$ points, $K \leq 30$.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $A_1$ $A_2$ … $A_N$

## Output

Print the maximum possible total score for Takahashi's throws.

```input1
5 2 3
10 2 8 10 2
```

```output1
56
```

The total score is maximized when panels $1,3$ and $4$ are hit, in this order.

```input2
5 5 2
5 2 10 5 9
```

```output2
28
```

This case satisfies the additional constraint $M = N$ for a partial score.

```input3
10 3 5
3 7 2 6 9 4 8 5 1 1000000000
```

```output3
5000000078
```