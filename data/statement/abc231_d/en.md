Score : $400$ points

## Problem Statement

Determine whether there is a way to line up $N$ people, numbered $1$ to $N$, in a row side by side to satisfy all of the $M$ conditions in the following format.

- Condition: Person $A_i$ and Person $B_i$ are adjacent.

## Constraints

- $2 \leq N \leq 10^5$
- $0 \leq M \leq 10^5$
- $1\leq A_i &lt; B_i \leq N$
- All pairs $(A_i,B_i)$ are distinct.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## Output

If there is a way to line up people to satisfy the conditions, print `Yes`; if not, print `No`.

```input1
4 2
1 3
2 3
```

```output1
Yes
```

One way to satisfy all the conditions is to line them up in the order $4,1,3,2$.

```input2
4 3
1 4
2 4
3 4
```

```output2
No
```

There is no way to line them up to satisfy all the conditions.