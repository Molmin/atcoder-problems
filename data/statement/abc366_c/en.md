Score : $300$ points

## Problem Statement

You have an empty bag.
You are given $Q$ queries, which must be processed in order.

There are three types of queries.

- `1 x` : Put one ball with the integer $x$ written on it into the bag.
- `2 x` : Remove one ball with the integer $x$ written on it from the bag and discard it. It is guaranteed that the bag has a ball with the integer $x$ written on it when this query is given.
- `3` : Print the number of different integers written on the balls in the bag.

## Constraints

- $1 \leq Q \leq 2 \times 10^{5}$
- $1 \leq x \leq 10^{6}$
- When a query of the second type is given, the bag has a ball with the integer $x$ written on it.
- There is at least one query of the third type.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $Q$
> 
> $\text{query}_1$
> 
> $\text{query}_2$
> 
> $\vdots$
> 
> $\text{query}_Q$

The $i$-th query $\text{query}_i$ is given in one of the following three formats:

> $1$ $x$
> $2$ $x$
> $3$

## Output

If there are $K$ queries of the third type, print $K$ lines.
The $i$-th line $(1 \leq i \leq K)$ should contain the answer to the $i$-th query of the third type.

```input1
8
1 3
1 1
1 4
3
2 1
3
1 5
3
```

```output1
3
2
3
```

Initially, the bag is empty.

For the first query `1 3`, a ball with the integer $3$ written on it enters the bag.

For the second query `1 1`, a ball with the integer $1$ written on it enters the bag.

For the third query `1 4`, a ball with the integer $4$ written on it enters the bag.

For the fourth query `3`, the bag has balls with the integers $1, 3, 4$, so print $3$.

For the fifth query `2 1`, a ball with the integer $1$ written on it is removed from the bag.

For the sixth query `3`, the bag has balls with the integers $3, 4$, so print $2$.

For the seventh query `1 5`, a ball with the integer $5$ written on it enters the bag.

For the eighth query `3`, the bag has balls with the integers $3, 4, 5$, so print $3$.

```input2
8
1 2
1 2
3
2 2
1 4
1 4
2 2
3
```

```output2
1
1
```