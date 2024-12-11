Score : $200$ points

## Problem Statement

We have $4$ cards with an integer $1$ written on it, $4$ cards with $2$, $\ldots$, $4$ cards with $N$, for a total of $4N$ cards.

Takahashi shuffled these cards, removed one of them, and gave you a pile of the remaining $4N-1$ cards. The $i$-th card $(1 \leq i \leq 4N - 1)$ of the pile has an integer $A_i$ written on it.

Find the integer written on the card removed by Takahashi.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq N \, (1 \leq i \leq 4N - 1)$
- For each $k \, (1 \leq k \leq N)$, there are at most $4$ indices $i$ such that $A_i = k$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_{4N - 1}$

## Output

Print the answer.

```input1
3
1 3 2 3 3 2 2 1 1 1 2
```

```output1
3
```

Takahashi removed a card with $3$ written on it.

```input2
1
1 1 1
```

```output2
1
```

```input3
4
3 2 1 1 2 4 4 4 4 3 1 3 2 1 3
```

```output3
2
```