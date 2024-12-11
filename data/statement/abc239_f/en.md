Score : $500$ points

## Problem Statement

The Republic of Atcoder has $N$ towns numbered $1$ through $N$, and $M$ highways numbered $1$ through $M$.<br>
Highway $i$ connects Town $A_i$ and Town $B_i$ bidirectionally.

King Takahashi is going to construct $(N-M-1)$ new highways so that the following two conditions are satisfied:

- One can travel between every pair of towns using some number of highways
- For each $i=1,\ldots,N$, exactly $D_i$ highways are directly connected to Town $i$

Determine if there is such a way of construction.  If it exists, print one.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $0 \leq M \lt N-1$
- $1 \leq D_i \leq N-1$
- $1\leq A_i \lt B_i \leq N$
- If $i\neq j$, then $(A_i, B_i) \neq (A_j,B_j)$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $D_1$ $\ldots$ $D_N$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## Output

If there isn't a way of construction that satisfies the conditions, print `-1`.<br>
If there is, print $(N-M-1)$ lines.  The $i$-th line should contain the indices of the two towns connected by the $i$-th highway to be constructed.

```input1
6 2
1 2 1 2 2 2
2 3
1 4
```

```output1
6 2
5 6
4 5
```

As in the Sample Output, the conditions can be satisfied by constructing highways connecting Towns $6$ and $2$, Towns $5$ and $6$, and Towns $4$ and $5$, respectively.

Another example to satisfy the conditions is to construct highways connecting Towns $6$ and $4$, Towns $5$ and $6$, and Towns $2$ and $5$, respectively.

```input2
5 1
1 1 1 1 4
2 3
```

```output2
-1
```

```input3
4 0
3 3 3 3
```

```output3
-1
```