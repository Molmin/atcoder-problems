Score : $1400$ points

## Problem Statement

There are $N$ turkeys.
We number them from $1$ through $N$.

$M$ men will visit here one by one.
The $i$-th man to visit will take the following action:

- If both turkeys $x_i$ and $y_i$ are alive: selects one of them with equal probability, then eats it.
- If either turkey $x_i$ or $y_i$ is alive (but not both): eats the alive one.
- If neither turkey $x_i$ nor $y_i$ is alive: does nothing.

Find the number of pairs $(i,\ j)$ ($1 \leq i &lt; j \leq N$) such that the following condition is held:

- The probability of both turkeys $i$ and $j$ being alive after all the men took actions, is greater than $0$.

## Constraints

- $2 \leq N \leq 400$
- $1 \leq M \leq 10^5$
- $1 \leq x_i &lt; y_i \leq N$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $:$
> 
> $x_M$ $y_M$

## Output

Print the number of pairs $(i,\ j)$ ($1 \leq i &lt; j \leq N$) such that the condition is held.

```input1
3 1
1 2
```

```output1
2
```

$(i,\ j) = (1,\ 3), (2,\ 3)$ satisfy the condition.

```input2
4 3
1 2
3 4
2 3
```

```output2
1
```

$(i,\ j) = (1,\ 4)$ satisfies the condition.
Both turkeys $1$ and $4$ are alive if:

- The first man eats turkey $2$.
- The second man eats turkey $3$.
- The third man does nothing.

```input3
3 2
1 2
1 2
```

```output3
0
```

```input4
10 10
8 9
2 8
4 6
4 9
7 8
2 8
1 8
3 4
3 4
2 7
```

```output4
5
```