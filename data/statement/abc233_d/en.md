Score : $400$ points

## Problem Statement

Given is a sequence of length $N$: $A=(A_1,A_2,\ldots,A_N)$, and an integer $K$.

How many of the contiguous subsequences of $A$ have the sum of $K$?<br>
In other words, how many pairs of integers $(l,r)$ satisfy all of the conditions below?

- $1\leq l\leq r\leq N$
- $\displaystyle\sum_{i=l}^{r}A_i = K$

## Constraints

- $1\leq N \leq 2\times 10^5$
- $|A_i| \leq 10^9$
- $|K| \leq 10^{15}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
6 5
8 -3 5 7 0 -4
```

```output1
3
```

$(l,r)=(1,2),(3,3),(2,6)$ are the three pairs that satisfy the conditions.

```input2
2 -1000000000000000
1000000000 -1000000000
```

```output2
0
```

There may be no pair that satisfies the conditions.