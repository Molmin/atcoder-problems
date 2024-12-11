Score : $1100$ points

## Problem Statement

Let us consider a grid of squares with $10^9$ rows and $N$ columns. Let $(i, j)$ be the square at the $i$-th column $(1 \leq i \leq N)$ from the left and $j$-th row $(1 \leq j \leq 10^9)$ from the bottom.

Snuke has cut out some part of the grid so that, for each $i = 1, 2, ..., N$, the bottom-most $h_i$ squares are remaining in the $i$-th column from the left.
Now, he will paint the remaining squares in red and blue.
Find the number of the ways to paint the squares so that the following condition is satisfied:

- Every remaining square is painted either red or blue.
- For all $1 \leq i \leq N-1$ and $1 \leq j \leq min(h_i, h_{i+1})-1$, there are exactly two squares painted red and two squares painted blue among the following four squares: $(i, j), (i, j+1), (i+1, j)$ and $(i+1, j+1)$.

Since the number of ways can be extremely large, print the count modulo $10^9+7$.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq h_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $h_1$ $h_2$ $...$ $h_N$

## Output

Print the number of the ways to paint the squares, modulo $10^9+7$.

```input1
9
2 3 5 4 1 2 4 2 1
```

```output1
12800
```

One of the ways to paint the squares is shown below:

```output1
#
  ##  #
 ###  #
#### ###
#########
```

```input2
2
2 2
```

```output2
6
```

There are six ways to paint the squares, as follows:

```output2
## ## ## ## ## ##
## ## ## ## ## ##
```

```input3
5
2 1 2 1 2
```

```output3
256
```

Every way to paint the squares satisfies the condition.

```input4
9
27 18 28 18 28 45 90 45 23
```

```output4
844733013
```

Remember to print the number of ways modulo $10^9 + 7$.