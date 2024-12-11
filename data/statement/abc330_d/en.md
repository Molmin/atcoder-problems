Score : $400$ points

## Problem Statement

You are given an $N \times N$ grid. Let $(i,j)$ denote the cell in the $i$-th row from the top and the $j$-th column from the left.<br>
The states of the cells are given by $N$ strings of length $N$, $S_1, S_2, \dots, S_N$, in the following format:

- If the $j$-th character of $S_i$ is `o`, there is an `o` written in cell $(i,j)$.
- If the $j$-th character of $S_i$ is `x`, there is an `x` written in cell $(i,j)$.

Find the number of triples of cells that satisfy all of the following conditions:

- The three cells in the triple are distinct.
- All three cells have an `o` written in them.
- Exactly two of the cells are in the same row.
- Exactly two of the cells are in the same column.

Here, two triples are considered different if and only if some cell is contained in exactly one of the triples.

## Constraints

- $N$ is an integer between $2$ and $2000$, inclusive.
- $S_i$ is a string of length $N$ consisting of `o` and `x`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the answer as an integer.

```input1
3
ooo
oxx
xxo
```

```output1
4
```

The following four triples satisfy the conditions:

- $(1,1),(1,2),(2,1)$
- $(1,1),(1,3),(2,1)$
- $(1,1),(1,3),(3,3)$
- $(1,2),(1,3),(3,3)$

```input2
4
oxxx
xoxx
xxox
xxxo
```

```output2
0
```

```input3
15
xooxxooooxxxoox
oxxoxoxxxoxoxxo
oxxoxoxxxoxoxxx
ooooxooooxxoxxx
oxxoxoxxxoxoxxx
oxxoxoxxxoxoxxo
oxxoxooooxxxoox
xxxxxxxxxxxxxxx
xooxxxooxxxooox
oxxoxoxxoxoxxxo
xxxoxxxxoxoxxoo
xooxxxooxxoxoxo
xxxoxxxxoxooxxo
oxxoxoxxoxoxxxo
xooxxxooxxxooox
```

```output3
2960
```