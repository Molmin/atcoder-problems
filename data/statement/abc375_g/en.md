Score : $575$ points

## Problem Statement

In the nation of AtCoder, there are $N$ cities numbered $1$ to $N$, and $M$ roads numbered $1$ to $M$.<br>
Road $i$ connects cities $A_i$ and $B_i$ bidirectionally and has a length of $C_i$.

For each $i = 1, \ldots, M$, determine whether the following two values are different.

- The shortest distance from city $1$ to city $N$ when all roads are passable
- The shortest distance from city $1$ to city $N$ when the $M - 1$ roads other than road $i$ are passable

If city $N$ can be reached from city $1$ in one of these cases but not the other, the two values are considered different.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq 2 \times 10^5$
- $1 \leq A_i &lt; B_i \leq N$
- All pairs $(A_i, B_i)$ are distinct.
- $1 \leq C_i \leq 10^9$
- City $N$ can be reached from city $1$ when all roads are passable.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$ $C_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$ $C_M$

## Output

Print $M$ lines. The $i$-th line should contain `Yes` if the shortest distance from city $1$ to city $N$ when all roads are passable is different from the shortest distance when the $M - 1$ roads other than road $i$ are passable, and `No` otherwise.

If city $N$ can be reached from city $1$ in one of these cases but not the other, the two values are considered different.

```input1
3 3
1 2 5
1 3 10
2 3 6
```

```output1
No
Yes
No
```

When all roads are passable, the shortest distance from city $1$ to city $3$ is $10$.

- When the two roads other than road $1$ are passable, the shortest distance is $10$.
- When the two roads other than road $2$ are passable, the shortest distance is $11$.
- When the two roads other than road $3$ are passable, the shortest distance is $10$.

```input2
4 6
2 3 1
2 4 1
3 4 1
1 2 1
1 3 1
1 4 1
```

```output2
No
No
No
No
No
Yes
```

When all roads are passable, the shortest distance from city $1$ to city $4$ is $1$.

When the five roads other than road $6$ are passable, the shortest distance is $2$.

```input3
2 1
1 2 1
```

```output3
Yes
```

When the zero roads other than road $1$ are passable, city $2$ cannot be reached from city $1$.