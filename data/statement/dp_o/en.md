Score : $100$ points

## Problem Statement

There are $N$ men and $N$ women, both numbered $1, 2, \ldots, N$.

For each $i, j$ ($1 \leq i, j \leq N$), the compatibility of Man $i$ and Woman $j$ is given as an integer $a_{i, j}$.
If $a_{i, j} = 1$, Man $i$ and Woman $j$ are compatible; if $a_{i, j} = 0$, they are not.

Taro is trying to make $N$ pairs, each consisting of a man and a woman who are compatible.
Here, each man and each woman must belong to exactly one pair.

Find the number of ways in which Taro can make $N$ pairs, modulo $10^9 + 7$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 21$
- $a_{i, j}$ is $0$ or $1$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_{1, 1}$ $\ldots$ $a_{1, N}$
> 
> $:$
> 
> $a_{N, 1}$ $\ldots$ $a_{N, N}$

## Output

Print the number of ways in which Taro can make $N$ pairs, modulo $10^9 + 7$.

```input1
3
0 1 1
1 0 1
1 1 1
```

```output1
3
```

There are three ways to make pairs, as follows ($(i, j)$ denotes a pair of Man $i$ and Woman $j$):

- $(1, 2), (2, 1), (3, 3)$
- $(1, 2), (2, 3), (3, 1)$
- $(1, 3), (2, 1), (3, 2)$

```input2
4
0 1 0 0
0 0 0 1
1 0 0 0
0 0 1 0
```

```output2
1
```

There is one way to make pairs, as follows:

- $(1, 2), (2, 4), (3, 1), (4, 3)$

```input3
1
0
```

```output3
0
```

```input4
21
0 0 0 0 0 0 0 1 1 0 1 1 1 1 0 0 0 1 0 0 1
1 1 1 0 0 1 0 0 0 1 0 0 0 0 1 1 1 0 1 1 0
0 0 1 1 1 1 0 1 1 0 0 1 0 0 1 1 0 0 0 1 1
0 1 1 0 1 1 0 1 0 1 0 0 1 0 0 0 0 0 1 1 0
1 1 0 0 1 0 1 0 0 1 1 1 1 0 0 0 0 0 0 0 0
0 1 1 0 1 1 1 0 1 1 1 0 0 0 1 1 1 1 0 0 1
0 1 0 0 0 1 0 1 0 0 0 1 1 1 0 0 1 1 0 1 0
0 0 0 0 1 1 0 0 1 1 0 0 0 0 0 1 1 1 1 1 1
0 0 1 0 0 1 0 0 1 0 1 1 0 0 1 0 1 0 1 1 1
0 0 0 0 1 1 0 0 1 1 1 0 0 0 0 1 1 0 0 0 1
0 1 1 0 1 1 0 0 1 1 0 0 0 1 1 1 1 0 1 1 0
0 0 1 0 0 1 1 1 1 0 1 1 0 1 1 1 0 0 0 0 1
0 1 1 0 0 1 1 1 1 0 0 0 1 0 1 1 0 1 0 1 1
1 1 1 1 1 0 0 0 0 1 0 0 1 1 0 1 1 1 0 0 1
0 0 0 1 1 0 1 1 1 1 0 0 0 0 0 0 1 1 1 1 1
1 0 1 1 0 1 0 1 0 0 1 0 0 1 1 0 1 0 1 1 0
0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 1 1 0 0 1
0 0 0 1 0 0 1 1 0 1 0 1 0 1 1 0 0 1 1 0 1
0 0 0 0 1 1 1 0 1 0 1 1 1 0 1 1 0 0 1 1 0
1 1 0 1 1 0 0 1 1 0 1 1 0 1 1 1 1 1 0 1 0
1 0 0 1 1 0 1 1 1 1 1 0 1 0 1 1 0 0 0 0 0
```

```output4
102515160
```

Be sure to print the number modulo $10^9 + 7$.