Score : $575$ points

## Problem Statement

You are given a grid $S$ with $H$ rows and $W$ columns consisting of `1`, `2`, `3`, and `?`. The character at the $i$-th row and $j$-th column is $S_{i,j}$.

By replacing each `?` in $S$ with `1`, `2`, or `3`, we can obtain $3^q$ different grids, where $q$ is the number of `?`. Among these grids, how many satisfy the following condition? Print the count modulo $998244353$.

- Any two adjacent (edge-sharing) cells contain different digits.

## Constraints

- $1 \leq H, W$
- $H \times W \leq 200$
- $H$ and $W$ are integers.
- $S$ is a grid with $H$ rows and $W$ columns consisting of `1`, `2`, `3`, and `?`.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_{1,1}S_{1,2}\ldots S_{1,W}$
> 
> $S_{2,1}S_{2,2}\ldots S_{2,W}$
> 
> $\vdots$
> 
> $S_{H,1}S_{H,2}\ldots S_{H,W}$

## Output

Print the answer.

```input1
2 2
1?
??
```

```output1
6
```

Among the grids obtained by replacing each `?` in $S$ with `1`, `2`, or `3`, the following six grids satisfy the condition.

```output1
12  12  12  13  13  13
21  23  31  21  31  32
```

```input2
2 3
123
3?1
```

```output2
0
```

None of the grids obtained by replacing `?` satisfies the condition.

```input3
8 8
3?1?????
???1????
??????2?
????????
????????
????13??
??13?1??
????????
```

```output3
779135038
```