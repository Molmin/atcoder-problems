Score : $800$ points

## Problem Statement

There are $N$ squares arranged in a row.
The squares are numbered $1$, $2$, $...$, $N$, from left to right.

Snuke is painting each square in red, green or blue.
According to his aesthetic sense, the following $M$ conditions must all be satisfied.
The $i$-th condition is:

- There are exactly $x_i$ different colors among squares $l_i$, $l_i + 1$, $...$, $r_i$.

In how many ways can the squares be painted to satisfy all the conditions?
Find the count modulo $10^9+7$.

## Constraints

- $1 \leq N \leq 300$
- $1 \leq M \leq 300$
- $1 \leq l_i \leq r_i \leq N$
- $1 \leq x_i \leq 3$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $l_1$ $r_1$ $x_1$
> 
> $l_2$ $r_2$ $x_2$
> 
> $:$
> 
> $l_M$ $r_M$ $x_M$

## Output

Print the number of ways to paint the squares to satisfy all the conditions, modulo $10^9+7$.

```input1
3 1
1 3 3
```

```output1
6
```

The six ways are:

- RGB
- RBG
- GRB
- GBR
- BRG
- BGR

where R, G and B correspond to red, green and blue squares, respectively.

```input2
4 2
1 3 1
2 4 2
```

```output2
6
```

The six ways are:

- RRRG
- RRRB
- GGGR
- GGGB
- BBBR
- BBBG

```input3
1 3
1 1 1
1 1 2
1 1 3
```

```output3
0
```

There are zero ways.

```input4
8 10
2 6 2
5 5 1
3 5 2
4 7 3
4 4 1
2 3 1
7 7 1
1 5 2
1 7 3
3 4 2
```

```output4
108
```