Score : $200$ points

## Problem Statement

There are $N$ people whose IDs are $1$, $2$, $\ldots$, and $N$.

Each of person $1$, person $2$, $\ldots$, and person $N$ performs the following action once in this order:

- If person $i$'s ID has not been called out yet, call out person $A_i$'s ID.

Enumerate the IDs of all the people whose IDs are never called out until the end **in ascending order**.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq N$
- $A_i \neq i$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Enumerate the IDs of all the people whose IDs are not called out until the end in ascending order in the following format:

> $K$
> 
> $X_1$ $X_2$ $\ldots$ $X_K$

In other words, the first line should contain the number of people, $K$, whose IDs are never called out until the end;
the second line should contain the sequence $(X_1, X_2, \ldots, X_K)$ of IDs of such people in ascending order, with spaces in between.

```input1
5
3 1 4 5 4
```

```output1
2
2 4
```

The five people's actions are as follows.

- Person $1$'s ID has not been called out yet, so person $1$ calls out person $3$'s ID.
- Person $2$'s ID has not been called out yet, so person $2$ calls out person $1$'s ID.
- Person $3$'s ID has already been called out by person $1$, so nothing happens.
- Person $4$'s ID has not been called out yet, so person $4$ calls out person $5$'s ID.
- Person $5$'s ID has already been called out by person $4$, so nothing happens.

Therefore, person $2$ and $4$'s IDs are not called out until the end.

```input2
20
9 7 19 7 10 4 13 9 4 8 10 15 16 3 18 19 12 13 2 12
```

```output2
10
1 2 5 6 8 11 14 17 18 20
```