Score : $200$ points

## Problem Statement

In a factory, there are $N$ robots placed on a number line.
Robot $i$ is placed at coordinate $X_i$ and can extend its arms of length $L_i$ in both directions, positive and negative.

We want to remove zero or more robots so that the movable ranges of arms of no two remaining robots intersect.
Here, for each $i$ ($1 \leq i \leq N$), the movable range of arms of Robot $i$ is the part of the number line between the coordinates $X_i - L_i$ and $X_i + L_i$, excluding the endpoints.

Find the maximum number of robots that we can keep.

## Constraints

- $1 \leq N \leq 100,000$
- $0 \leq X_i \leq 10^9$ ($1 \leq i \leq N$)
- $1 \leq L_i \leq 10^9$ ($1 \leq i \leq N$)
- If $i \neq j$, $X_i \neq X_j$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $L_1$
> 
> $X_2$ $L_2$
> 
> $\vdots$
> 
> $X_N$ $L_N$

## Output

Print the maximum number of robots that we can keep.

```input1
4
2 4
4 3
9 3
100 5
```

```output1
3
```

By removing Robot $2$, we can keep the other three robots.

```input2
2
8 20
1 10
```

```output2
1
```

```input3
5
10 1
2 1
4 1
6 1
8 1
```

```output3
5
```