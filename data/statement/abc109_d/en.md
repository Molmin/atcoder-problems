Score : $400$ points

## Problem Statement

There is a grid of square cells with $H$ horizontal rows and $W$ vertical columns. The cell at the $i$-th row and the $j$-th column will be denoted as Cell $(i, j)$.

In Cell $(i, j)$, $a_{ij}$ coins are placed.

You can perform the following operation any number of times:

Operation: Choose a cell that was not chosen before and contains one or more coins, then move one of those coins to a vertically or horizontally adjacent cell.

Maximize the number of cells containing an even number of coins.

## Constraints

- All values in input are integers.
- $1 \leq H, W \leq 500$
- $0 \leq a_{ij} \leq 9$

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $a_{11}$ $a_{12}$ $...$ $a_{1W}$
> 
> $a_{21}$ $a_{22}$ $...$ $a_{2W}$
> 
> $:$
> 
> $a_{H1}$ $a_{H2}$ $...$ $a_{HW}$

## Output

Print a sequence of operations that maximizes the number of cells containing an even number of coins, in the following format:

> $N$
> 
> $y_1$ $x_1$ $y_1'$ $x_1'$
> 
> $y_2$ $x_2$ $y_2'$ $x_2'$
> 
> $:$
> 
> $y_N$ $x_N$ $y_N'$ $x_N'$

That is, in the first line, print an integer $N$ between $0$ and $H \times W$ (inclusive), representing the number of operations.

In the $(i+1)$-th line ($1 \leq i \leq N$), print four integers $y_i, x_i, y_i'$ and $x_i'$ ($1 \leq y_i, y_i' \leq H$ and $1 \leq x_i, x_i' \leq W$), representing the $i$-th operation. These four integers represents the operation of moving one of the coins placed in Cell $(y_i, x_i)$ to a vertically or horizontally adjacent cell, $(y_i', x_i')$.

Note that if the specified operation violates the specification in the problem statement or the output format is invalid, it will result in *Wrong Answer*.

```input1
2 3
1 2 3
0 1 1
```

```output1
3
2 2 2 3
1 1 1 2
1 3 1 2
```

Every cell contains an even number of coins after the following sequence of operations:

- Move the coin in Cell $(2, 2)$ to Cell $(2, 3)$.
- Move the coin in Cell $(1, 1)$ to Cell $(1, 2)$.
- Move one of the coins in Cell $(1, 3)$ to Cell $(1, 2)$.

```input2
3 2
1 0
2 1
1 0
```

```output2
3
1 1 1 2
1 2 2 2
3 1 3 2
```

```input3
1 5
9 9 9 9 9
```

```output3
2
1 1 1 2
1 3 1 4
```