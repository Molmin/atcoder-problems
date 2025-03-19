Score : $200$ points

## Problem Statement

There are $N$ snakes.

Initially, the thickness of the $i$-th snake is $T_i$, and its length is $L_i$.

The weight of a snake is defined as the product of its thickness and length.

For each integer $k$ satisfying $1 \leq k \leq D$, find the weight of the heaviest snake when every snake's length has increased by $k$. 

## Constraints

- $1 \leq N, D \leq 100$
- $1 \leq T_i, L_i \leq 100$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $D$
> 
> $T_1$ $L_1$
> 
> $T_2$ $L_2$
> 
> $\vdots$
> 
> $T_N$ $L_N$

## Output

Print $D$ lines. The $k$-th line should contain the weight of the heaviest snake when every snake's length has increased by $k$.

```input1
4 3
3 3
5 1
2 4
1 10
```

```output1
12
15
20
```

When every snake’s length has increased by $1$, the snakes' weights become $12, 10, 10, 11$, so print $12$ on the first line.

When every snake’s length has increased by $2$, the snakes' weights become $15, 15, 12, 12$, so print $15$ on the second line.

When every snake’s length has increased by $3$, the snakes' weights become $18, 20, 14, 13$, so print $20$ on the third line.

```input2
1 4
100 100
```

```output2
10100
10200
10300
10400
```