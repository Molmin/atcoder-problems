Score : $1700$ points

## Problem Statement

We have a grid with $N$ rows and $N$ columns.
The cell at the $i$-th row and $j$-th column is denoted ($i$, $j$).

Initially, $M$ of the cells are painted black, and all other cells are white.
Specifically, the cells ($a_1$, $b_1$), ($a_2$, $b_2$), $...$, ($a_M$, $b_M$) are painted black.

Snuke will try to paint as many white cells black as possible, according to the following rule:

- If two cells ($x$, $y$) and ($y$, $z$) are both black and a cell ($z$, $x$) is white for integers $1 \leq x,y,z \leq N$, paint the cell ($z$, $x$) black.

Find the number of black cells when no more white cells can be painted black.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq M \leq 10^5$
- $1 \leq a_i,b_i \leq N$
- All pairs ($a_i$, $b_i$) are distinct.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $:$
> 
> $a_M$ $b_M$

## Output

Print the number of black cells when no more white cells can be painted black.

```input1
3 2
1 2
2 3
```

```output1
3
```

It is possible to paint one white cell black, as follows:

- Since cells ($1$, $2$) and ($2$, $3$) are both black and a cell ($3$, $1$) is white, paint the cell ($3$, $1$) black.

```input2
2 2
1 1
1 2
```

```output2
4
```

It is possible to paint two white cells black, as follows:

- Since cells ($1$, $1$) and ($1$, $2$) are both black and a cell ($2$, $1$) is white, paint the cell ($2$, $1$) black.
- Since cells ($2$, $1$) and ($1$, $2$) are both black and a cell ($2$, $2$) is white, paint the cell ($2$, $2$) black.

```input3
4 3
1 2
1 3
4 4
```

```output3
3
```

No white cells can be painted black.